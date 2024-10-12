import { useState } from 'react'
import {createBrowserRouter as createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HeroPage from './components/Hero/HeroPage'
import TransitionHero from './components/Hero/TransitionHero'
import { AnimatePresence } from 'framer-motion'

function App() {

const router = createBrowserRouter([
  {
    path:"/",
    element:<TransitionHero/>
  } ,
  {
    path:"/home",
    element:<HeroPage/>
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
