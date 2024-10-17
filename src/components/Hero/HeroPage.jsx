import './HeroStyles.css'
import {  motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons'
const transition ={delay:.2,duration:1 ,ease:[0.43,0.13,0.23,0.95]}
const transitiontext ={delay:1.8,duration:1.2, ease:[0.43,0.13,0.23,0.95]}
const transitionborderTop ={delay:.8,duration:1, ease:[0.43,0.13,0.23,0.95]}

const transitionborder ={delay:2.5,duration:1.5, ease:[0.43,0.13,0.23,0.95]}





const HeroPage = () => {

  
  return (
    <motion.section
    initial="initial"
    exit="exit"
    animate="animate"
    className='hero-section'>
        <motion.div initial={{backgroundColor:"#f7e3d1"}} className='div-title-hero'>
          

          <motion.img  transition={transition} initial={{  borderRadius:"10%",scale:1,width: "350px", height:" 450px"}} 
          animate={{ borderRadius:"0", width:"100%", height:"100%"}} 
          className='imagen-background' src='Images/HeroImagenMinimalist.webp'/>
   <motion.div className='h1-animate' initial={{borderBottom:"0 solid #D9D2D2" ,width:0}} animate={{borderBottom:"1px solid #D9D2D2" ,width:""}} transition={transitionborderTop}>
        <motion.h1 className='h1-title-hero'        initial={{opacity:0 ,y:200 ,x:0}} animate={{opacity:1,y:50 ,x:0}} transition={transitiontext}  >Minimalist</motion.h1>
        </motion.div>

         <motion.div  className='text-section'> 
          <motion.div className='left-div' initial={{borderRight:"0 solid #D9D2D2",height:0}} animate={{borderRight:"1px solid #D9D2D2",height:""}}  transition={transitionborder}  >
      
          <motion.p initial={{opacity:0,y:50}} animate={{opacity:1,y:10}} transition={transitiontext} className='p-left'>Creemos que el Cuidado de la Piel no es una rutina, es un viaje hacia la confianza, la vitalidad y la autoexpresión.</motion.p>
          </motion.div>
          <div className='right-div'>
            <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:10}} transition={transitiontext} className='box-div'>
      <div className='top-div'>

        <p className='p-right'>Maleic Bond Repair <br/> Complex 5% Hair Serum</p>
        <button className='buynow-button'>Comprar Ahora</button>
      </div>
        <div className='button-div'>
          <p className='free-text' ><span><FontAwesomeIcon icon={faCheck} size='xs'/></span>Libre de silicona</p>
          <p className='free-text' ><span><FontAwesomeIcon icon={faCheck} size='xs'/></span>Libre de sulfatos</p>
          <p className='free-text' ><span><FontAwesomeIcon icon={faCheck} size='xs'/></span>Libre de parabeno</p>
            </div>
       
            </motion.div>
          </div>
        </motion.div>

      </motion.div>
    </motion.section>
  )
}

export default HeroPage