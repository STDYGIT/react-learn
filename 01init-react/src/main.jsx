import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React  from 'react'

// out own custom element to render suing just js
const jselem = {
  type:"a",
  props:{
      href:"https://www.google.com",
      target:"_blank"
  },
  children: "click me to visit google.com"
}

// react syntax defined
const elem=(
  <a href="google.com">hii</a>
)

// react creation of any element

const reactElement = React.createElement(
  'a',
  {href : "https://acedca.in",target: "_blank"},
  'visit me'
)

// render to page
createRoot(document.getElementById('root')).render(
   reactElement
)
