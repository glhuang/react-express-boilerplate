export function template() {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>JS App</title>
      </head>
      <body>
        <div id="app"></div>
        <script src="/build/bundle.js"></script>
      </body>
    </html>
  `
};