import React from "react"
import ReactDOM from "react-dom"
import App from "./Components/App"
import Helmet from "./Components/Helmet"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Helmet />
  </React.StrictMode>,
  document.getElementById("root")
)
