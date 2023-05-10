import React from 'react'
import ReactDOM from 'react-dom/client'

function Hello() {
  return <h1>hello, yuna</h1>
}
const element = <Hello />;

ReactDOM.createRoot(element, document.getElementById("root"));

export default Hello