import React ,{useRef} from 'react'
import '../Shop/CardStyles.css'
import { motion,useInView } from 'framer-motion'
const CardProduct = ({imagen, name,price}) => {



const ref= useRef(null)
const transition ={duration:1, ease:[0.43,0.13,0.23,0.95]}
const transitionImg ={duration:0.8, ease:[0.43,0.13,0.23,0.95]}
const isInView = useInView(ref);

  return (
    <div className='shop-card-product'>
        <motion.div ref={ref} className='shop-imagen-container'>

        <motion.img transition={transitionImg} initial={{opacity :0.5 ,y:100}} animate={isInView ? {opacity :1 ,y:0} : {}}  className='shop-imagen-product' src={imagen} alt='product-imagen'></motion.img>
        </motion.div>
        <motion.div className='shop-card-info' initial={{opacity:0,y:80}} animate={isInView ?{opacity :1 ,y:30 } : {}} transition={transition} >

      
        <p className='shop-name-product'>{name}</p>
      
        <p className='shop-price-product'>${price}</p>
        </motion.div>
    </div>
  )
}

export default CardProduct