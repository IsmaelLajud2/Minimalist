import {useRef ,useEffect}from 'react'
import  '../PerfomanceSection/PerfomanceStyles.css'
import Gotas from '../Gotas'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { motion ,useInView} from 'framer-motion'
import Cards from '../Cards/Cards'

gsap.registerPlugin(ScrollTrigger)
const VersatilitySection= () => {

    const transitiontext ={delay:0.6,duration:1.2, ease:[0.43,0.13,0.23,0.95]} 
    const imageRef = useRef(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true , margin: "-100px 0px" });

    useEffect(() => {
        // Configuración del parallax para la imagen del producto
        gsap.to(imageRef.current, {
          yPercent: -20, // Movimiento de la imagen en parallax
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true, // Sincroniza el scroll con el movimiento de la imagen
          },
        });
      }, []);

  return (
    <section className='perfomance-container' ref={ref}>
        
 <div className='textleft-div'>
    <motion.div initial={{opacity:0 ,y:50}} animate={ isInView ? { opacity:1,y:10} : {}} ref={ref} transition={transitiontext}  className='first-container'>

   
    <p className='perfomance-number'>[03]</p>
    <h1 className='perfomance-title'>Versatilidad y Adaptabilidad</h1>
    </motion.div>
   <Gotas/>
    <div className='div-p-bottom-content'>
        <p className='p-bottom-content'>Ya sea que busque hidratación, reparación o protección,nuestra  <br/> amplia gama de productos satisface una variedad de preocupaciones   <br/>y preferencias. Con las fórmulas efectivas de Minimalist , puede confiar en  <br/> que nuestros cosméticos cumplirán con sus expectativas.</p>

    </div>
    
 </div>
 <Cards>
    <img className='imagen-product' src='Images/VersatilityImagen.webp' ref={imageRef} alt='producto'></img>
    </Cards>
    </section>
   
  )
}

export default VersatilitySection