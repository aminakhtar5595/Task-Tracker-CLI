const { loadTasks } = require("../storage");

const VALID_STATUSES = new Set(["todo", "in-progress", "done"]);

function listTasks(statusFilter) {
  const tasks = loadTasks();

  let filtered = tasks;

  if (statusFilter) {
    if (!VALID_STATUSES.has(statusFilter)) {
      throw new Error(
        `Invalid status "${statusFilter}". Use: todo, in-progress, or done.`
      );
    }
    filtered = tasks.filter((task) => task.status === statusFilter);
  }

  if (filtered.length === 0) {
    const label = statusFilter ? ` with status "${statusFilter}"` : "";
    console.log(`No tasks found${label}.`);
    return;
  }

  for (const task of filtered) {
    console.log(
      `[${task.id}] ${task.description} (${task.status}) | created: ${task.createdAt} | updated: ${task.updatedAt}`
    );
  }
}

module.exports = listTasks;
