# React To-Do List SPA

## Overview

This project is a React Single Page Application (SPA) designed to manage a local to-do list. It aims to showcase skills in web technologies such as HTML5, CSS3, TypeScript and React.

## Features

- **List Tasks:** Display items on the to-do list, optionally filtered by state and sorted.
- **Add Task:** Allow users to add a new task to the list.
- **Edit Task:** Provide the ability to modify a task's description or mark it as complete.
- **Remove Task:** Allow users to delete a task from the list.

## User Interaction

- **Creating a Task:** Users can input a task in a text field and click the "Create" button to add it to the list as incomplete.
- **Marking a Task:** Users can toggle the state of a task by clicking the checkbox on the left of the list entry.
- **Editing a Task:** Clicking the "Edit" link allows users to edit the task name.
- **Deleting a Task:** Clicking the "Delete" link removes the task entry.
- **Filtering the List:** Toggling the "Hide completed" checkbox at the bottom filters completed entries from the list.
- **Sorting the List:** Clicking the "Tasks" list header sorts the list alphabetically.
- **Authentication:** Add support for user authentication with registration and login.

## Technologies

- React
- TypeScript
- HTML5
- CSS3

## Backend Integration

This React To-Do List SPA seamlessly integrates with a backend server to fetch and persist to-do list data, which is hosted in a separate repository called [todolist-server](https://github.com/tiagodgsoares/todolist-server). The following interactions are handled by the backend server:

- **List Tasks:** The application fetches the to-do list items from the server, optionally filtered by state and sorted.
- **Add Task:** When a user adds a new task, the application sends a request to the server to create and store the task.
- **Edit Task:** Editing a task triggers a request to the server to update the task's description or completion status.
- **Remove Task:** Deleting a task results in a request to the server to remove the corresponding entry.
- **Marking a Task:** Marking a task as complete or incomplete involves sending a request to the server to update the task's completion status.
- **Filtering and Sorting:** Applying filters or sorting the task list also triggers requests to the server to retrieve the updated data based on the specified criteria.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
