import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const customElement = {
//   type : 'a',
//   props : {
//       href : 'https://youtube.com',
//       target : '_blank'
//   },
//   children: 'Click me to visit YouTube'
// }

const anotherElement = (
  <a href='https://youtube.com' target='_blank'>Visit YouTube anotherElement</a>
)

const username = "Amrit Sharma"

const customElementreact = React.createElement(
  'a',
  {href : 'https://youtube.com', target : '_blank'},
  'Visit YouTube customElementreact',
  username
)

createRoot(document.getElementById('root')).render(
  // <App />
  
  // MyApp()
  // <MyApp/>

  // customElement
  // anotherElement

  customElementreact

)