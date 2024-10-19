import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './TransitionStyles.css'
import { useEffect } from 'react'


const transition ={duration:2 ,ease:[0.43,0.13,0.23,1],scale:1.3}
const transitionCard={duration:2 ,ease:[0.43,0.13,0.23,0.95]}
const TransitionHero = () => {


  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() =>{
      navigate('/home')
    } , 2200)

    return() => clearTimeout(timer)
  }, [navigate])
  
  return (
    <motion.div     exit={{opacity:0}}
    transition={transitionCard}>
    <motion.div 

    className='backgroundStlyes-hero'>
        
    
      
       <Link className='div-imagenanimation' to={"/home"}>
       <motion.img 
       initial={{y:700}}
       animate={{y:0 }}
       whileHover={{scale:1.1}}
       transition={transition}
       alt='product-img' src='Images/HeroImagenMinimalist.webp'>
        </motion.img></Link>
    
    </motion.div>
     </motion.div>
  )
}

export default TransitionHero