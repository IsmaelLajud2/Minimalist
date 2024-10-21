import {useRef} from 'react'
import '../Shop/CardStyles.css'
import { motion,useInView } from 'framer-motion'
const CardProduct = ({imagen, name,price}) => {



const ref= useRef(null)
const transition ={duration:1, ease:[0.43,0.13,0.23,0.95]}
const transitionImg ={duration:0.5, ease:[0.43,0.13,0.23,0.95]}
const isInView = useInView(ref);

  return (
    <div className='shop-card-product'>
        <motion.div ref={ref} className='shop-imagen-container'>

        <motion.img transition={transitionImg} initial={{y:100 ,height:0}} animate={isInView ? {y:0 ,height:""} : {}}  className='shop-imagen-product' src={imagen} alt='product-imagen'></motion.img>
        </motion.div>
        <motion.div className='shop-card-info' initial={{opacity:0,y:80}} animate={isInView ?{opacity :1 ,y:30 } : {}} transition={transition} >

      
        <p className='shop-name-product'>{name}</p>
      
        <p className='shop-price-product'>${price}</p>
        </motion.div>
    </div>
  )
}

export default CardProduct