function isDagger(str) {
  return str.startsWith("+") || str.startsWith("$") || str.startsWith("dg");
}

function replaceWithInput(str) {
  const regex = /\|\|(.+?)\|\|/g;
  const oldInput =
    '<input class="code-input" type="text" maxlength="40" $value#input="$1">';
  return str.replace(regex, oldInput);
}

function addRawDirective(str) {
  const regex = /\${.+?}/g;
  const rawSpan = "<span @raw>$&<span>";
  return str.replace(regex, rawSpan);
}

function removeAttributes(raw) {
  // create a temporary element to hold the html
  var tempEl = document.createElement("div");
  tempEl.innerHTML = raw;

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

export const produceDemoHtml = (raw) => {
  const codeWithoutAttr = removeAttributes(raw);
  let hlCode = hljs.highlight(codeWithoutAttr, { language: "xml" }).value;
  const codeWithInputs = replaceWithInput(hlCode);
  const codeWithRawSpan = addRawDirective(codeWithInputs);
  return codeWithRawSpan;
};
