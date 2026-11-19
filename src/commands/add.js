const { loadTasks, saveTasks, getNextId } = require("../storage");
const { now } = require("../utils");

function addTask(description) {
  if (!description || !description.trim()) {
    throw new Error("Please provide a task description.");
  }

  const tasks = loadTasks();
  const id = getNextId(tasks);
  const timestamp = now();

  const task = {
    id,
    description: description.trim(),
    status: "todo",
    createdAt: timestamp,
    updatedAt: timestamp,
  };

  tasks.push(task);
  saveTasks(tasks);

  console.log(`Task added successfully (ID: ${id})`);
}

module.exports = addTask;
