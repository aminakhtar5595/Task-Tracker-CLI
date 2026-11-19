const { loadTasks, saveTasks } = require("../storage");
const { now, parseTaskId, findTaskIndex } = require("../utils");

function markTaskStatus(idArg, status) {
  const id = parseTaskId(idArg);
  const tasks = loadTasks();
  const index = findTaskIndex(tasks, id);

  tasks[index].status = status;
  tasks[index].updatedAt = now();
  saveTasks(tasks);

  console.log(`Task ${id} marked as ${status}.`);
}

module.exports = markTaskStatus;
