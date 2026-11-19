#!/usr/bin/env node

const addTask = require("./commands/add");
const updateTask = require("./commands/update");
const deleteTask = require("./commands/delete");
const listTasks = require("./commands/list");
const markTaskStatus = require("./commands/status");
const { printUsage } = require("./utils");

function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command) {
    printUsage();
    process.exitCode = 1;
    return;
  }

  try {
    switch (command) {
      case "add":
        addTask(args[1]);
        break;
      case "update":
        updateTask(args[1], args[2]);
        break;
      case "delete":
        deleteTask(args[1]);
        break;
      case "mark-in-progress":
        markTaskStatus(args[1], "in-progress");
        break;
      case "mark-done":
        markTaskStatus(args[1], "done");
        break;
      case "list":
        listTasks(args[1]);
        break;
      case "help":
      case "--help":
      case "-h":
        printUsage();
        break;
      default:
        console.error(`Unknown command: "${command}"`);
        printUsage();
        process.exitCode = 1;
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exitCode = 1;
  }
}

main();
