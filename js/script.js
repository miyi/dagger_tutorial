const codeBlockA1 = `
<div class="content">
<div class="card">
  <div class="title">title</div>
  <div class="assignee">assigned to:</div>
  <div class="info">content</div>
</div>
</div>
`;

// const highlight = (element) => {
//   // hljs.highlightAll();
//   element.innerHTML = element.innerHTML
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;")
//     .replace(/'/g, "&#039;");

//   hljs.highlightElement(element);
// };

export const renderCode = (code) => hljs.highlight(code, {language: 'xml'}).value

const testCode = `
<meta author="Joe Example">
`;

const testCode2 = `
<div>hello world<div>
`;

export const loading = () => ({
  code: codeBlockA1,
});
