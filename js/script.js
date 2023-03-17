const cardXML = `
<div class="card" +loading="{
  title: 'Create Card',
  assignee: 'me',
  info: 'Play around with the +loading directive in dagger.js.'
}">
  <div class="title">\${title}</div>
  <div class="assignee">assigned to: \$\{assignee}</div>
  <div class="info">\$\{info}</div>
</div>
`;

function isDagger(str) {
  return (
    str.startsWith("+") ||
    str.startsWith("$") ||
    str.startsWith("dg") ||
    str.startsWith("@")
  );
}

function removeAttributes(htmlString) {
  // create a temporary element to hold the html
  var tempEl = document.createElement("div");
  tempEl.innerHTML = htmlString;

  // loop through all elements and remove their attributes
  var elements = tempEl.getElementsByTagName("*");
  for (var i = 0; i < elements.length; i++) {
    var attrs = elements[i].attributes;
    for (var j = attrs.length - 1; j >= 0; j--) {
      isDagger(attrs[j].name)
        ? true
        : elements[i].removeAttribute(attrs[j].name);
    }
  }

  // return the modified html as a string

  return tempEl.innerHTML;
}

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

export const renderCode = (code) => {
  return `<div @raw>${hljs.highlight(code, { language: "xml" }).value}</div>`;
};

export const loading = () => ({
  rawHTML: cardXML,
  showcaseHTML: removeAttributes(cardXML),
  title: "create card",
  assignee: "John Doe",
  info: "create a card with dagger",
});
