import React from 'react'
import ReactDOM  from 'react-dom/client'

//App component
import App from '@components/App.jsx'

const ELEMENT_ROOT =document.getElementById("root");
const CONTEXT_ROOT =ReactDOM.createRoot(ELEMENT_ROOT);


CONTEXT_ROOT.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

