export const loadingTasks = () => {
  const task1 = {
    title: "create task bar",
    assignee: "me",
    details:
      "create a task bar that holds task cards, then create an add button to add new cards.",
  };
  const task2 = {
    title: "I'm task 2",
    assignee: "me",
    details:
      "make card draggable. other cards should make space for the dragging card on hover.",
  };
  const task3 = {
    title: "add multiple taskbars",
    assignee: "me",
    details:
      "create multiple taskbars, and allow task cards to drag across different taskbars.",
  };
  return {
    dragItem: null,
    dragIndex: null,
    tasks: [task1, task2, task3],
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

export const pushToTasks = ($scope, tasks, position = 0) => {
  //validation
  const validatedform = validateTaskForm($scope);
  validatedform && tasks.push(validatedform);
};

export const removeFromTasks = ($scope, tasks) => {
  tasks.splice($scope.index, 1);
};

export const dragStart = (cardIndex, dragItem) => {
  console.log(cardIndex + " " + dragItem);
  dragItem = cardIndex;
};

export const dragEnd = (tasks, dragItem, dragIndex) => {
  console.log("item: ", dragItem);
  console.log("index: ", dragIndex);
  if (dragItem != dragIndex) {
    const item = tasks.splice(dragItem, 1);
    // console.log(item);
    tasks.splice(dragIndex, 0, item[0]);
    const newtasks = tasks.map((x)=>x)
    tasks = newtasks
    console.log(tasks);
  }
};

export const movedown = (index, dragItem, dragIndex) => {
  if (
    dragItem !== null &&
    dragIndex !== null &&
    dragIndex >= index &&
    index < dragItem
  ) {
    return true;
  } else {
    return false;
  }
};

export const moveup = (dragItem, dragIndex) => {
  if (
    dragItem !== null &&
    dragIndex !== null &&
    dragIndex >= index &&
    index > dragItem
  ) {
    return true;
  } else {
    return false;
  }
};
