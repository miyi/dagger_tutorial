export const produceDemoJs = (raw) => hljs.highlight(raw, {language: "javascript"}).value

// export const produceDemoJs = (raw) => {
//   const hlcode =hljs.highlight(raw, {language: "javascript"}).value
//   console.log(hlcode)
//   return hlcode
// }