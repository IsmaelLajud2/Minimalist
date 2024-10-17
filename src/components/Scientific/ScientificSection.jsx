import {useRef,useEffect}from 'react'
import  '../PerfomanceSection/PerfomanceStyles.css'
import Gotas from '../Gotas'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion ,useInView} from 'framer-motion'
import Cards from '../Cards/Cards'


const ScientificSection= () => {

   
  

    const transitiontext ={delay:0.6,duration:1.2, ease:[0.43,0.13,0.23,0.95]} 






    const ref = useRef(null);
    const isInView = useInView(ref, { once: true , margin: "-400px 0px" });
  return (
    <section className='perfomance-container' ref={ref}>
        
 <div className='textleft-div'>
    <motion.div initial={{opacity:0 ,y:50}} animate={ isInView ? { opacity:1,y:10} : {}} ref={ref} transition={transitiontext}  className='first-container'>

   
    <p className='perfomance-number'>[02]</p>
    <h1 className='perfomance-title'>Precisión científica</h1>
    </motion.div>
   <Gotas/>
    <div className='div-p-bottom-content'>
        <p className='p-bottom-content'>Respaldadas por la ciencia, nuestras fórmulas  están elaboradas   <br/> meticulosamente  con ingredientes probados   que se enfocan <br/> en necesidades específicas del cuidado de la piel y el cabello. <br/> Priorizamos la funcionalidad para garantizar que cada producto <br/> brinde resultados óptimos sin concesiones.</p>

    </div>
    
 </div>
<Cards>
    <img initial={{opacity : 1}} animate={isInView ? {y:200} : {}} ref={ref} className='imagen-product' src='Images/MaleicImagen.webp' alt='producto' ></img>
    </Cards>
    </section>
   
  )
}

export default ScientificSection