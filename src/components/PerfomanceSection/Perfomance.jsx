import{useRef,useEffect,useState}from 'react'
import  './PerfomanceStyles.css'
import Gotas from '../Gotas'
import { motion} from 'framer-motion'
import { ScrollParallax } from 'react-just-parallax'

const Perfomance = () => {

const [isinView, setIsinView] = useState()
const [scrollY, setScrollY] = useState(0);

const imageRef = useRef(null);
const handleScroll = () => {
   setScrollY(window.scrollY);
};



useEffect(() => {
  const observer = new IntersectionObserver((entries) =>{
   const entry = entries[0]
   if (entry.isIntersecting) {
      setIsinView(true)
   } else {
      setIsinView(false)
   }
  } , {threshold:0.3})

  if (imageRef.current) {
   observer.observe(imageRef.current)
  }
  return ()=>{
   if (imageRef.current) {
      observer.unobserve(imageRef.current)
   }
  }
}, 

[])





useEffect(() => {
   window.addEventListener('scroll', handleScroll);
   return () => {
       window.removeEventListener('scroll', handleScroll);
   };
}, []);

    const transitiontext ={delay:0.6,duration:1.2, ease:[0.43,0.13,0.23,0.95]} 
  
  
  return (
    <section className='perfomance-container' >
      

       <div className='card-div'>
 <div className='textleft-div'>
    <motion.div initial={{opacity:0 ,y:50}} animate={ { opacity:1,y:10} } transition={transitiontext}  className='first-container'>

   
    <p className='perfomance-number'>[01]</p>
    <h1 className='perfomance-title'>Rendimiento Mejorado</h1>
    </motion.div>
   <Gotas/>
    <div className='div-p-bottom-content'>
        <p className='p-bottom-content'>Nuestros productos ofrecen un rendimiento incomparable <br/>y cubren una amplia gama de tipos de cabello y piel. Desde <br/>revitalizar el cabello dañado hasta rejuvenecer el cutis cansado, <br/>priorizamos la eficiencia por sobre todas las cosas.</p>

    </div>
    
 </div>
 <div  className="imagen-div">
  

   
    
    <img className='imagen-product' src='Images/section3Parte1Imagen.webp' alt='producto'     ></img>

   </div>
    
   </div>
   <div className='card-div'>
 <div className='textleft-div'>
    <motion.div initial={{opacity:0 ,y:50}} animate={  { opacity:1,y:10} }  transition={transitiontext}  className='first-container'>

   
    <p className='perfomance-number'>[02]</p>
    <h1 className='perfomance-title'>Precisión científica</h1>
    </motion.div>
   <Gotas/>
    <div className='div-p-bottom-content'>
    <p className='p-bottom-content'>Respaldadas por la ciencia, nuestras fórmulas  están elaboradas   <br/> meticulosamente  con ingredientes probados   que se enfocan <br/> en necesidades específicas del cuidado de la piel y el cabello. <br/> Priorizamos la funcionalidad para garantizar que cada producto <br/> brinde resultados óptimos sin concesiones.</p>

    </div>
    
 </div>

 <div className='imagen-div' >

    <img className='imagen-product' src='Images/MaleicImagen.webp'alt='producto'   ></img>

   </div>
    

   </div>
   <div className='card-div'>
 <div className='textleft-div'>
    <motion.div initial={{opacity:0 ,y:50}} animate={  { opacity:1,y:10} }  transition={transitiontext}  className='first-container'>

   
    <p className='perfomance-number'>[03]</p>
    <h1 className='perfomance-title'>Versatilidad y Adaptabilidad</h1>
    </motion.div>
   <Gotas/>
    <div className='div-p-bottom-content'>
    <p className='p-bottom-content'>Ya sea que busque hidratación, reparación o protección,nuestra  <br/> amplia gama de productos satisface una variedad de preocupaciones   <br/>y preferencias. Con las fórmulas efectivas de Minimalist , puede confiar en  <br/> que nuestros cosméticos cumplirán con sus expectativas.</p>

    </div>
    
 </div>
 <div  className='imagen-div' ref={imageRef}>

    <img    className='imagen-product' src='Images/VersatilityImagen.webp' alt='producto' ref={imageRef} ></img>
                        
   </div>
    
   </div>
    </section>
   
  )
}

export default Perfomance