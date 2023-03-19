function isDagger(str) {
  return str.startsWith("+") || str.startsWith("$") || str.startsWith("dg");
}

function isLoadingDirective(str) {
  return str.startsWith("+loading");
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

const removeLoadingDirective = (raw) => {
  var tempEl = document.createElement("div");
  tempEl.innerHTML = raw;

  var elements = tempEl.getElementsByTagName("*");
  for (var i = 0; i < elements.length; i++) {
    var attrs = elements[i].attributes;
    for (var j = attrs.length - 1; j >= 0; j--) {
      isLoadingDirective(attrs[j].name)
        ? elements[i].removeAttribute(attrs[j].name)
        : true;
    }
  }

  return tempEl.innerHTML;
};

const produceDemoCode = (raw) => {
  const codeWithoutAttr = removeAttributes(raw);
  let hlCode = hljs.highlight(codeWithoutAttr, { language: "xml" }).value;
  const codeWithInputs = replaceWithInput(hlCode);
  const codeWithRawSpan = addRawDirective(codeWithInputs);
  return codeWithRawSpan;
};

export const loadingScene1 = () => {
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
    rawDemo: cardXML,
    demoCode: produceDemoCode(cardXML),
    demoRender: removeLoadingDirective(cardXML),
    title,
    assignee,
    details,
  };
};

export const loadingScene2 = () => {
  const cardXML = `
<div class="card" +loading="{
    title: '||title||', 
 assignee: '||assignee||',
  details: '||details||',
  isComplete: '||true||'
}">
 <div class="title">\${title}</div>
 <div class="assignee">assigned to: \${assignee}</div>
 <div class="details">\${details}</div>
 <button class="button">\${isComplete? "complete":"incomplete"}</button>
</div>
  `;
  const title = "create card";
  const assignee = "me";
  const details = "experiment with the +loading directive";
};
