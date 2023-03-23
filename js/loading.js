export const loadingScene1Demo = () => {
  const cardXML = `
<div class="card" +loading="{
      title: '||title||', 
   assignee: '||assignee||',
    details: '||details||',
}">
  <div class="title">\${title}</div>
  <div class="assignee">assigned to: \${assignee}</div>
  <div class="details">\${details}</div>
</div>
  `;
  const title = "create card";
  const assignee = "me";
  const details = "experiment with the +loading directive";
  return {
    demo: cardXML,
    title,
    assignee,
    details,
  };
};

export const loadingScene2Demo = () => {
  const cardXML = `
<div class="card" +loading="{
      title: '||title||', 
   assignee: '||assignee||',
    details: '||details||',
}">
  <div class="title">\${title}</div>
  <div class="assignee">assigned to: \${assignee}</div>
  <div class="details">\${details}</div>
</div>
  `;
  const title = "create card";
  const assignee = "me";
  const details =
    "Experiment with the +loading directive. Change the scope variables to watch how it changes the rendered output!";
  return {
    demo: cardXML,
    title,
    assignee,
    details,
  };
};
