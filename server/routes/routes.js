import express from 'express';
import pool from '../modules/pool.js';

const router = express.Router();

//Get all flows from the flows table
router.get('/', (req, res) => {
  pool
    .query(`SELECT * FROM "flows";`)
    .then(results => {
      res.send(results.rows);
      console.log(results.rows);
    })
    .catch(error => {
      console.log('Error making SELECT for flows:', error);
      res.sendStatus(500);
    });
});

//Get flow titles and latest versions of each flow
router.get('/latest-versions', async (req, res) => {
    try {
        const query = `
            SELECT
                flows.id,
                flows.title,
                flows.is_published,
                flows.current_version_id,
                versions.id AS version_id,
                versions.flow_id,
                versions.versions_number
            FROM
                flows
            LEFT JOIN
                versions ON flows.id = versions.flow_id
            WHERE
                versions.versions_number = (
                    SELECT
                        MAX(versions_number)
                    FROM
                        versions v
                    WHERE
                        v.flow_id = flows.id
                );
        `;

        const result = await pool.query(query);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching latest versions:', error);
        res.sendStatus(500);
    }
});

// Add a step to a flow
router.post('/add-step/:flowId', async (req, res) => {
    const flowId = req.params.flowId;
    const newStepData = req.body;
  
    try {
      // Begin a transaction
      await pool.query('BEGIN');
  
      // Get the current version of the flow
      const currentVersionResult = await pool.query(
        `SELECT current_version_id FROM "flows" WHERE id=$1`,
        [flowId]
      );
      const currentVersionId = currentVersionResult.rows[0].current_version_id;
  
      // Create a new version for the flow
      const newVersionResult = await pool.query(
        `INSERT INTO "versions" (flow_id, versions_number) VALUES ($1, $2) RETURNING id`,
        [flowId, currentVersionId + 1]
      );
      const newVersionId = newVersionResult.rows[0].id;
  
      // Copy all the steps from the current version to the new version
      await pool.query(
        `INSERT INTO "version_steps" (versions_id, steps_id)
         SELECT $1, steps_id
         FROM "version_steps"
         WHERE versions_id = $2`,
        [newVersionId, currentVersionId]
      );
  
      // Add a new step to the steps table
      const newStepResult = await pool.query(
        `INSERT INTO "steps" (instructions, content, input_type) VALUES ($1, $2, $3) RETURNING id`,
        [newStepData.instructions, newStepData.content, newStepData.input_type]
      );
      const newStepId = newStepResult.rows[0].id;
  
      // Add the new step to the version_steps table
      await pool.query(
        `INSERT INTO "version_steps" (versions_id, steps_id) VALUES ($1, $2)`,
        [newVersionId, newStepId]
      );
  
      // Update the flow's current_version_id to point to the new version
      await pool.query(
        `UPDATE "flows" SET current_version_id = $1 WHERE id = $2`,
        [newVersionId, flowId]
      );
  
      // Commit the transaction
      await pool.query('COMMIT');
  
      res.status(201).json({ message: 'Step added successfully' });
    } catch (error) {
      // Rollback the transaction in case of an error
      await pool.query('ROLLBACK');
      console.error('Error adding step:', error);
      res.sendStatus(500);
    }
  });

export default router;

