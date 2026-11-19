const fs = require("fs");
const path = require("path");

const TASKS_FILE = path.join(process.cwd(), "tasks.json");

function ensureTasksFile() {
  if (!fs.existsSync(TASKS_FILE)) {
    fs.writeFileSync(TASKS_FILE, "[]", "utf8");
  }
}

function loadTasks() {
  ensureTasksFile();

  try {
    const data = fs.readFileSync(TASKS_FILE, "utf8");
    const tasks = JSON.parse(data);

    if (!Array.isArray(tasks)) {
      throw new Error("tasks.json must contain an array of tasks");
    }

    return tasks;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error("tasks.json is corrupted or invalid JSON");
    }
    throw error;
  }
}

function saveTasks(tasks) {
  fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2), "utf8");
}

function getNextId(tasks) {
  if (tasks.length === 0) {
    return 1;
  }

  return Math.max(...tasks.map((task) => task.id)) + 1;
}

module.exports = {
  loadTasks,
  saveTasks,
  getNextId,
};
