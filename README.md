# Summit

Welcome to the CMS for Enlifted! Here you will find many wonderful things, such as:

- The ability to add new content into our application dynamically
  - Flows
  - and Filters
  - and Formats, oh my!
- The ability to administer users
- Payment related activities (billing and such)

Not all of these are live yet, but someday soon!™

# Local Development

To get started, it's super easy! This is just a basic Vite React App, so the steps to success are:

1. yarn install
1. yarn build
1. yarn dev <-- This will actually run the application locally and watch for changes, etc.

This project uses typescript, and yarn build will check for typescript errors (the tsc command does this). I highly recommend setting up your editor with a typescript plugin that will alert you to these issues on the fly, makes it MUCH easier to fix!

If you want to check the project with eslint, run `yarn lint`, if you want to format all the code to match our standards, run `yarn format`. Format uses Prettier for the engine, I also highly recommend installing the prettier plugin to your favorite editor (such as vs code), and have it format on save. Not only does it make your code look nicer, it actually helps with random boilerplate like semicolons too!
