export const loadingConfigsHtml = () => ({
  label: "card.html",
  demo: `
<html>
  <script type="dagger/configs">
    {
      "js": "./card.js",
      "style": "card.css"
    }
  </script>
  <div>
    ...card html content
  </div>
</html>
`,
});
