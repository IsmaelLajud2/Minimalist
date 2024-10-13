import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './TransitionStyles.css'

const transition ={duration:1 ,ease:[0.43,0.13,0.23,0.95]}
const transitionCard={duration:2 ,ease:[0.43,0.13,0.23,0.95]}
const TransitionHero = () => {
  return (
    <motion.div     exit={{opacity:0}}
    transition={transitionCard}>
    <motion.div 

    className='backgroundStlyes-hero'>
        
    
      
       <Link className='div-imagenanimation' to={"/home"}>
       <motion.img 
       initial={{y:600}}
       animate={{y:0 }}
       whileHover={{scale:1.1}}
       transition={transition}
       alt='product-img' src='Images/HeroImagenMinimalist.jpeg'>
        </motion.img></Link>
    
    </motion.div>
     </motion.div>
  )
}

export default TransitionHero