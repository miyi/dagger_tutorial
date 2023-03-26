export const loadingScene1Demo = () => {
  const cardXML = `
<div class="card" +loading="{
      title: '||title||', 
   assignee: '||assignee||',
    details: '||details||',
}">
  <div class="title">{{title}}</div>
  <div class="assignee">assigned to: {{assignee}}</div>
  <div class="details">{{details}}</div>
</div>
  `;

  const title = "create card";
  const assignee = "me";
  const details = "experiment with the +loading directive";
  return {
    demo: cardXML,
    render: "",
    title,
    assignee,
    details,
  };
};

const addBrackets = (str) => `(${str})`;

export const loadingScene2Demo = () => {
  //eval(dollar_class) converts to a string update that's updated
  const cardXML = `
<div
  class="card"
  $class="eval(dollar_class)"
  +loading="{
        title: 'task card', 
     assignee: 'me',
      details: 'Try coding your own +click directives 
                and $class directives!',
     complete: '||complete||',
     collapse: '||collapse||',
}"
>
  <div class="title" +click="eval(collapse_btn_click)">
    <span>{{title}}</span>
    <svg
      class="collapse-btn"
      viewBox="0 0 24 24"
      fill="#0078f1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.16108 14.9083C4.45387 15.7165 5.02785 16.9814 6.1018 16.9814H17.898C18.972 16.9814 19.5459 15.7165 18.8388 14.9083L13.3169 8.59762C12.6197 7.80079 11.3801 7.80079 10.6829 8.59762L5.16108 14.9083ZM6.65274 15.4814L11.8118 9.58537C11.9114 9.47154 12.0885 9.47154 12.1881 9.58537L17.3471 15.4814H6.65274Z"
      />
    </svg>
  </div>
  <div class="content">
    <div class="assignee">assigned to: {{assignee}}</div>
    <div class="details">{{details}}</div>
    <button class="complete-button" +click="eval(complete_btn_click)">
      {{complete?'completed':'not complete'}}
    </button>
  </div>
</div>
  `;
  const title = "task card";
  const assignee = "me";
  const details = `Try making your own +click and $class directives! 
  Remember that +click accepts any statements, 
  but $class accepts only 3 types; string, string array, 
  and objects.`;
  const complete_btn_click = "complete=!complete";
  const collapse_btn_click = "collapse=!collapse";
  const dollar_class = "{complete, collapse}";
  const complete = false;
  const collapse = false;
  return {
    demo: cardXML,
    title,
    assignee,
    details,
    collapse_btn_click,
    complete_btn_click,
    dollar_class,
    complete,
    collapse,
    input_processors: { addBrackets },
  };
};

export const loadingHtml = () => (
  console.log($scope),
  {
    demo: `
<div
  class="card"
  $class="eval(dollar_class)"
  +loading="{
        title: 'task card', 
     assignee: 'me',
      details: 'Try coding your own +click directives 
                and $class directives!',
     complete: '||complete||',
     collapse: '||collapse||',
}"
>
  <div class="title" +click="eval(collapse_btn_click)">
    <span>{{title}}</span>
    <svg
      class="collapse-btn"
      viewBox="0 0 24 24"
      fill="#0078f1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.16108 14.9083C4.45387 15.7165 5.02785 16.9814 6.1018 16.9814H17.898C18.972 16.9814 19.5459 15.7165 18.8388 14.9083L13.3169 8.59762C12.6197 7.80079 11.3801 7.80079 10.6829 8.59762L5.16108 14.9083ZM6.65274 15.4814L11.8118 9.58537C11.9114 9.47154 12.0885 9.47154 12.1881 9.58537L17.3471 15.4814H6.65274Z"
      />
    </svg>
  </div>
  <div class="content">
    <div class="assignee">assigned to: {{assignee}}</div>
    <div class="details">{{details}}</div>
    <button class="complete-button" +click="eval(complete_btn_click)">
      {{complete?'completed':'not complete'}}
    </button>
  </div>
</div>
  `,
  }
);

export const loadingBrowser = () => ({
  demo: `
<div
  class="card"
  $class="eval(dollar_class)"
}"
>
  <div class="title" +click="eval(collapse_btn_click)">
    <span>\${title}</span>
    <svg
      class="collapse-btn"
      viewBox="0 0 24 24"
      fill="#0078f1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.16108 14.9083C4.45387 15.7165 5.02785 16.9814 6.1018 16.9814H17.898C18.972 16.9814 19.5459 15.7165 18.8388 14.9083L13.3169 8.59762C12.6197 7.80079 11.3801 7.80079 10.6829 8.59762L5.16108 14.9083ZM6.65274 15.4814L11.8118 9.58537C11.9114 9.47154 12.0885 9.47154 12.1881 9.58537L17.3471 15.4814H6.65274Z"
      />
    </svg>
  </div>
  <div class="content">
    <div class="assignee">assigned to: \${assignee}</div>
    <div class="details">\${details}</div>
    <button class="complete-button" +click="eval(complete_btn_click)">
      \${complete?'completed':'not complete'}
    </button>
  </div>
</div>
  `,
});
