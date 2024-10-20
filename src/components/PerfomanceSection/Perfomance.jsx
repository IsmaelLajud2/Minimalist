import{useRef,useEffect,useState}from 'react'
import  './PerfomanceStyles.css'
import Gotas from '../Gotas'
import { motion } from 'framer-motion'

const Perfomance = () => {

   const [visibleSection, setVisibleSection] = useState(null);


const firstDivRef = useRef(null)
const secondDivRef =useRef(null)
const thirdDivRef =useRef(null)




useEffect(() => {
  const observer = new IntersectionObserver((entries)=>{
   entries.forEach((entry) =>{
      if (entry.isIntersecting) {
         setVisibleSection(entry.target.id)
      }
   });
  } ,
{threshold: 0.3})

const firstDiv = firstDivRef.current;
    const secondDiv = secondDivRef.current;
    const thirdDiv = thirdDivRef.current;

    if (firstDiv) observer.observe(firstDiv);
    if (secondDiv) observer.observe(secondDiv);
    if (thirdDiv) observer.observe(thirdDiv);

    return () => {
      
      if (firstDiv) observer.unobserve(firstDiv);
      if (secondDiv) observer.unobserve(secondDiv);
      if (thirdDiv) observer.unobserve(thirdDiv);
}
}, [])


    const transitiontext ={duration:1.6, ease: [0.25, 0.1, 0.25, 1]} 
  
  
  return (
    <section className='perfomance-container' >
      

       <div className='card-div'>
 <motion.div className='textleft-div' ref={firstDivRef} transition={transitiontext}   id='firstDiv'  initial={{opacity:0 ,y:30}} animate={visibleSection === "firstDiv" ? {opacity:1 , y:10} : {opacity:0}}  >
    <div  className='first-container' >
<p className='perfomance-number'>[01]</p>
    <h1 className='perfomance-title'>Rendimiento Mejorado</h1>
    </div>
   <Gotas/>
    <div className='div-p-bottom-content'>
        <p className='p-bottom-content'>Nuestros productos ofrecen un rendimiento incomparable <br/>y cubren una amplia gama de tipos de cabello y piel. Desde <br/>revitalizar el cabello dañado hasta rejuvenecer el cutis cansado, <br/>priorizamos la eficiencia por sobre todas las cosas.</p>

    </div>
    
 </motion.div>
 <div  className="imagen-div">
  <img className='imagen-product' src='Images/Perfomance/section3Parte1Imagen.webp' alt='producto'></img>

   </div>
    
   </div>
   <motion.div className='card-div' >
   <motion.div  className='textleft-div' transition={transitiontext}  ref={secondDivRef} id='secondDivRef'
    initial={{opacity:0 ,y:30}} animate={visibleSection === "secondDivRef" ? {opacity:1 , y:10} : {opacity:0}}>
    <motion.div   className='first-container'>

   
    <p className='perfomance-number'>[02]</p>
    <h1 className='perfomance-title'>Precisión científica</h1>
    </motion.div>
   <Gotas/>
    <div className='div-p-bottom-content'>
    <p className='p-bottom-content'>Respaldadas por la ciencia, nuestras fórmulas  están elaboradas   <br/> meticulosamente  con ingredientes probados   que se enfocan <br/> en necesidades específicas del cuidado de la piel y el cabello. <br/> Priorizamos la funcionalidad para garantizar que cada producto <br/> brinde resultados óptimos sin concesiones.</p>

    </div>
    
 </motion.div>

 <div className='imagen-div' >

    <img className='imagen-product' src='Images/Perfomance/MaleicImagen.webp'alt='producto'   ></img>

   </div>
    

   </motion.div>
   <motion.div className='card-div' >
   <motion.div   className='textleft-div' ref={thirdDivRef} id='thirdDivRef'
    initial={{opacity:0 ,y:30}} animate={visibleSection === "thirdDivRef" ? {opacity:1 , y:10} : {opacity:0}} transition={transitiontext}
    >
    <motion.div   className='first-container'>

   
    <p className='perfomance-number'>[03]</p>
    <h1 className='perfomance-title'>Versatilidad y Adaptabilidad</h1>
    </motion.div>
   <Gotas/>
    <div className='div-p-bottom-content'>
    <p className='p-bottom-content'>Ya sea que busque hidratación, reparación o protección,nuestra  <br/> amplia gama de productos satisface una variedad de preocupaciones   <br/>y preferencias. Con las fórmulas efectivas de Minimalist , puede confiar en  <br/> que nuestros cosméticos cumplirán con sus expectativas.</p>

    </div>
    
 </motion.div>
 <div  className='imagen-div' >

    <img    className='imagen-product' src='Images/Perfomance/VersatilityImagen.webp' alt='producto'  ></img>
                        
   </div>
    
   </motion.div>
    </section>
   
  )
}

export default Perfomance