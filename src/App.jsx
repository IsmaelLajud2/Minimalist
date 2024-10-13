import {createBrowserRouter as createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import { AnimatePresence } from 'framer-motion'
import TransitionHero from './components/Hero/TransitionHero'

import Layout from './LandingPage/Layout'



function App() {

const router = createBrowserRouter([
  {
    path:"/",
    element:<TransitionHero/>
  } ,
  {
    path:"/home",
    element:<Layout/>
  }
])
  
  return (
    <>
    <AnimatePresence  mode='wait'>
  <RouterProvider router={router}></RouterProvider>
  
  </AnimatePresence>
 
     </>
  )
}

export default App
