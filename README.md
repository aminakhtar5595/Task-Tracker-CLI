# Task Tracker CLI

A simple command-line task tracker. Manage todos with positional arguments and store them in a local `tasks.json` file — no external libraries.

## Setup

```bash
npm link
```

Or run directly:

```bash
node src/index.js <command>
# or
npm run task -- <command>
```

## Commands

```bash
# Add a task
task-cli add "Buy groceries"

# Update / delete
task-cli update 1 "Buy groceries and cook dinner"
task-cli delete 1

# Change status
task-cli mark-in-progress 1
task-cli mark-done 1

# List tasks
task-cli list
task-cli list todo
task-cli list in-progress
task-cli list done
```

## Task shape

Each task in `tasks.json` has:

| Field         | Description                          |
|---------------|--------------------------------------|
| `id`          | Unique identifier                    |
| `description` | Short task description               |
| `status`      | `todo`, `in-progress`, or `done`     |
| `createdAt`   | ISO timestamp when created           |
| `updatedAt`   | ISO timestamp when last updated      |

`tasks.json` is created automatically in the current working directory if it does not exist.
