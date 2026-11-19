const { loadTasks, saveTasks } = require("../storage");
const { now, parseTaskId, findTaskIndex } = require("../utils");

function updateTask(idArg, description) {
  if (!description || !description.trim()) {
    throw new Error("Please provide a new task description.");
  }

  const id = parseTaskId(idArg);
  const tasks = loadTasks();
  const index = findTaskIndex(tasks, id);

  tasks[index].description = description.trim();
  tasks[index].updatedAt = now();
  saveTasks(tasks);

  console.log(`Task ${id} updated successfully.`);
}

module.exports = updateTask;
