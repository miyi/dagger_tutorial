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