function isDagger(str) {
  return str.startsWith("+") || str.startsWith("$") || str.startsWith("dg");
}

function replaceWithInput(str) {
  // identifies ||tag|| patterns
  const shortRegex = /%%(.+?)%%/g;
  const shortInput =
    '<input class="demo-input scope" type="text" maxlength="100" $value#input="$1">';
  // identifies eval(tag) patterns
  const longRegex = /@@(.+?)@@/g;
  const longInput =
    '<input class="demo-input eval" type="text" maxlength="160" $value#input="$1">';
  const doubleBracketsRegex = /\{\{(.+?)\}\}/g;
  const doubleBracketsReplacement = "<span @raw>${$1}</span>";
  const demoCode = str
    .replace(shortRegex, shortInput)
    .replace(longRegex, longInput)
    .replace(doubleBracketsRegex, doubleBracketsReplacement);
  return demoCode;
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
  return codeWithInputs;
};
