
# Task Manager

A simple and responsive task management application built using HTML, CSS, and JavaScript. It allows users to organize daily tasks with options to add, edit, delete, and track task completion.

## Features

- Add new tasks.
- Edit existing tasks.
- Delete tasks.
- Mark tasks as completed.
- Undo completed tasks.
- Save tasks using browser Local Storage.
- Automatically restore saved tasks after page reload.
- Add tasks by pressing the Enter key.
- Responsive user interface.

## Technologies Used

- HTML5 – Structure of the application.
- CSS3 – Styling, layout, and responsive design.
- JavaScript – Application logic and DOM manipulation.
- Local Storage – Persistent storage of tasks in the browser.

## How to Run

1. Clone this repository:

   git clone YOUR_REPOSITORY_URL

2. Open the project folder.

3. Open `index.html` in your browser.

No additional dependencies are required.

## Project Structure

task-manager/
│
├── index.html
├── style.css
├── script.js
└── README.md

## How It Works

- Tasks are stored as JavaScript objects containing
  task text and completion status.
- JavaScript dynamically creates and displays task elements.
- Local Storage saves the task list as JSON.
- Saved tasks are retrieved automatically when the
  application is reopened or refreshed.

## Key Concepts Practiced

- JavaScript arrays and objects.
- DOM manipulation.
- Event handling.
- Array methods such as forEach() and splice().
- JSON.stringify() and JSON.parse().
- Browser Local Storage.
- Responsive web design.

## Author

YOUR NAME
