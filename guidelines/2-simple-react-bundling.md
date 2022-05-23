# Simple React bundling

- Checkout to `2-simple-react-bundling` branch

```sh
git checkout 2-simple-react-bundling
```

- install dependencies

```sh
npm install
```

- run webpack

```sh
npx webpack
```

- `dist/main.js` will be created
- open `dist/index.html` in the browser to see the result

## Under the hood

Step to achieve React bundling:

- install babel and babel presets

  ```sh
  npm install --save-dev @babel/core @babel/preset-env @babel/preset-react
  ```

  `@babel/preset-env` responsible for transforming new JavaScript syntax.

  `@babel/preset-react` responsible for transforming JSX and React related syntax.

- install webpack loader for babel

  ```sh
  npm install --save-dev babel-loader
  ```

- install React dependencies

  ```sh
  npm install react react-dom
  ```

- create `babel.config.json` file to configure babel presets

  ```json
  {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  }
  ```

- create `webpack.config.js` to configure `babel-loader` for `.js` and `.jsx` file and allow webpack to import file with `.jsx` extension

  ```js
  module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader'
        }
      ]
    },
    resolve: {
      extensions: [
        '.js',
        '.jsx',
      ]
    }
  }
  ```

- prepare `dist/index.html` as our main page and put `<div id="app"></div>` as container for React components

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webpack exercise</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="main.js"></script>
  </body>
  </html>
  ```

- exclude `dist/index.html` from ignored files in `.gitignore`

  ```
  dist/*
  !dist/index.html
  ```

- create React components, for example `src/components/Message.jsx`

- create `src/App.jsx` which include all components for the web app

- create `src.index.js` to render our `App.jsx` into HTML page

Visit [this link](https://github.com/surdarmaputra/webpack-babel-playground/compare/main...2-simple-react-bundling) to see the full changes. 
