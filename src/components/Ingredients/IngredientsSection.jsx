
import '../Ingredients/IngredientesStyles.css'


import { motion,useInView } from 'framer-motion'
import CarouselIngredients from './CarouselIngredients'
import { useRef } from 'react'



const IngredientsSection = () => {

  const ref=useRef(null)
const transition ={delay:.2,duration:2 ,ease:[0.43,0.13,0.23,0.95]}

const isInView = useInView(ref, { once: true , margin: "-100px 0px" });

  
  return (
    <section className='ingredients-section-container'>
        <video className='background-video' autoPlay muted loop> 
            <source src='Videos/waterdrop.mp4' type="video/mp4"/>
        </video>
        <motion.div ref={ref} className='text-content' transition={transition} initial={{opacity:0 ,y :50}} animate={ isInView ? {opacity:1 ,y:10} :{opacity:0}}>
            <motion.h1 className='proof-h1-text'>Ingredientes Cientificamente <br></br> Comprobados</motion.h1>
            <motion.p className='proof-p-text'>Desbloquea el potencial de nuestras formulas con <br/>ingredientes cientificamente comprobados</motion.p>   
            <motion.button className='proof-button'>Tienda</motion.button>
            <CarouselIngredients/>
              </motion.div>

        
    </section>
  )
}

export default IngredientsSection