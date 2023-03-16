import { combineReducers } from 'redux';
import flowStepReducer from './flowstep.reducer';
import optionsSelectReducer from './optionselected.reducer';
import wysiwygReducer from './wysiwyg.reducer';



const rootReducer = combineReducers({
    flowStepReducer,
    optionsSelectReducer,
    wysiwygReducer
});

export default rootReducer;