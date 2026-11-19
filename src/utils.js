function now() {
  return new Date().toISOString();
}

function parseTaskId(value) {
  const id = Number(value);

  if (!Number.isInteger(id) || id <= 0) {
    throw new Error(`Invalid task ID: "${value}". Please provide a positive integer.`);
  }

  return id;
}

function findTaskIndex(tasks, id) {
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    throw new Error(`Task with ID ${id} not found.`);
  }

  return index;
}

function printUsage() {
  console.log(`Usage:
  task-cli add "<description>"
  task-cli update <id> "<description>"
  task-cli delete <id>
  task-cli mark-in-progress <id>
  task-cli mark-done <id>
  task-cli list
  task-cli list todo
  task-cli list in-progress
  task-cli list done`);
}

module.exports = {
  now,
  parseTaskId,
  findTaskIndex,
  printUsage,
};
