// const codeBlockA1 = `
// <code class='html'>
// <div +loading="{
//   title: 'hello',
//   description: 'create the first task card',
//   completed: false,
//   assignee: 'Ming'
// }">
//   <div>
//     <a>${scope.title}</a>
//     <a>description:</a>
//     <a>${scope.description}</a>
//     <a>${scope.assignee}</a>
//   <div>
// </div>
// </code>
// `;

const highlight = () => {
  // hljs.highlightAll();
  document.querySelectorAll("code").forEach(function (element) {
    debugger;
    element.innerHTML = element.innerHTML
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  });
  hljs.highlightAll();
};

export const render = (code) => {
  setTimeout(highlight, 100);
  return code;
};

const testCode = `
<code class="html"><meta author="Joe Example"></code>
`;

const testCode2 = `
<div>hello world<div>
`;

export const loading = () => ({
  code: testCode,
  code2: testCode2,
});
