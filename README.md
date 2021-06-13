# nested-js-app
The nested-js application project

## run
Following command starts an instance of the application on port 8080.

```
npm start
```

## Example

```
import { renderContent, div, h1, p } from "@capsular/nested-js"

function HeaderComponent() {
  return div(
    'nested-js Header Component'
  )
}

function App() {
  return div(
    h1('nested-js'),
    HeaderComponent,
    p('Welcome to nested-js')
  )
}

renderContent(App, document.getElementBy('root')
```
