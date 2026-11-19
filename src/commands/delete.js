const { loadTasks, saveTasks } = require("../storage");
const { parseTaskId, findTaskIndex } = require("../utils");

function deleteTask(idArg) {
  const id = parseTaskId(idArg);
  const tasks = loadTasks();
  const index = findTaskIndex(tasks, id);

  tasks.splice(index, 1);
  saveTasks(tasks);

  console.log(`Task ${id} deleted successfully.`);
}

module.exports = deleteTask;
