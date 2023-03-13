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

const testCode = `
<code class="html"><meta author="Joe Example"></code>
`;

const testCode2 = `
<div>hello world<div>
`

const loading = () => ({
  code: testCode,
  code2: testCode2
});
