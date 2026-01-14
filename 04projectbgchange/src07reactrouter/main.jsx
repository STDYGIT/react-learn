import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import { Home,About,Github,Contact,User,githubInfoLoader } from './components'
// import App from './App.jsx'


// either this way


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       },
//       {
//         path: "/Github",
//         element: <Github />
//       },
//       {
//         path: "about",
//         element: <About />
//       }
//     ]
//   }
// ])

// either this way
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='/' element={<Home />} /> 
      <Route path='/about' element={<About />} /> 
      <Route loader={githubInfoLoader} path='/github' element={<Github />} /> 
      <Route path='/contact' element={<Contact />} /> 
      <Route path='/user/:user_id' element={<User />} /> 
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
