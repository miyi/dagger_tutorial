export const loadingTasks = () => {
  const task1 = {
    title: "create task bar",
    assignee: "me",
    details:
      "create a task bar that holds task cards, then create an add button to add new cards.",
  };
  return {
    tasks: [task1],
  };
};

const validateTaskForm = ($scope) => {
  const formEntries = Object.entries($scope);
  for (const i in formEntries) {
    if (formEntries[i][1].trim().length < 1) return null;
    formEntries[i][1] = formEntries[i][1].trim();
  }
  return Object.assign({}, Object.fromEntries(formEntries));
};

export const pushToTasks = ($scope, tasks) => {
  //validation
  const validatedform = validateTaskForm($scope);
  validatedform ? tasks.push(validatedform) : null;
};
