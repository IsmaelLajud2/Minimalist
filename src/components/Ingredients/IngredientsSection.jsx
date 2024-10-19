import React from 'react'
import '../Ingredients/IngredientesStyles.css'


import { motion } from 'framer-motion'
import CarouselIngredients from './CarouselIngredients'


motion
const IngredientsSection = () => {
  return (
    <section className='ingredients-section-container'>
        <video className='background-video' autoPlay muted loop> 
            <source src='Videos/waterdrop.mp4' type="video/mp4"/>
        </video>
        <motion.div className='text-content'>
            <motion.h1 className='proof-h1-text'>Ingredientes Cientificamente <br></br> Comprobados</motion.h1>
            <motion.p className='proof-p-text'>Desbloquea el potencial de nuestras formulas con <br/>ingredientes cientificamente comprobados</motion.p>   
            <motion.button className='proof-button'>Tienda</motion.button>
            <CarouselIngredients/>
              </motion.div>

        
    </section>
  )
}

export default IngredientsSection