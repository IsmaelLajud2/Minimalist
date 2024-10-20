import {useRef} from 'react'
import '../Special/SpecialStyles.css'

import AnimatedNumber from './AnimatedNumber'
import { motion,useInView } from 'framer-motion'
const SpecialSection = () => {

  const transitionBar ={duration:2.2, ease:[0.43,0.13,0.23,0.95]}
  const transitionborderbar ={delay:0.8, duration:2.3, ease:[0.43,0.13,0.23,0.95]}

  const ref= useRef(null)
  
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  return (
    <section className='speacial-section-container'>
        <div className='left-special-div'>

        <h1 className='h1-special'> ¿Que lo hace <br/>  especial?</h1>
        </div>
        <div className='right-special-div'>
          <div className='first-div-right'>

         <div className='animated-number' >
        <AnimatedNumber className='animated-number' />
          </div> 
        <p className='special-first-p'>Nuestra mezcla revolucionaria patentada</p>
        <p className='special-second-p'>Nuestro Serum proporciona un notable aumento del +22.9% en<br/> la resistencia a la tracción de las fibras capilares después de un <br/>solo  lavado, superando los resultados de la competencia.</p>
        </div>
        <p className='normal-serum'> Serum normal</p>
        
        <motion.div ref={ref} initial={{height:0, opacity:0 ,borderRight:"0px dotted #000"}} animate={isInView ? {opacity:0.5,borderRight:"3.1px dotted #000" ,height:"136px"} :{}} transition={transitionborderbar} className='graphic-line'></motion.div>
        <motion.div ref={ref} initial={{width: 0 ,height : "30px", opacity:0 ,backgroundColor: "#dcd0d2" }} animate={isInView ? { opacity:1, width:"360px",backgroundColor: "#dcd0d2"   } : {}} transition={transitionBar} className='static-bar'/>
        <aside className='minimalist-stadistic'>
        <p className='minimalist-serum'>Serum Minimalist</p>
        <p className='minimalist-number'><span className='plus-number'>+</span><AnimatedNumber></AnimatedNumber></p>
        </aside>
        
          <motion.div ref={ref} initial={{width: 0 ,height : "30px", opacity:0,backgroundColor: "#d65612" }} animate={isInView ? { opacity:1, width:"500px",backgroundColor: "#d65612" } : {}} transition={transitionBar} className='static-bar'>
              
          </motion.div>
    
        
        </div>
    </section>
  )
}

export default SpecialSection