import {useRef} from 'react'
import './wwaStyles.css'
import {  motion ,useInView} from 'framer-motion'


const Seccion2 = () => {


    const transitionborder ={delay:0.2,duration:3, ease:[0.43,0.13,0.23,0.95]}
    const transitiontext ={delay:0.8,duration:1.3, ease:[0.43,0.13,0.23,0.95]}
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true , margin: "-100px 0px" });


      const radius = 230; 
      const circumference = 2 * Math.PI * radius; 
  
      const drawFromTopRight = {
          hidden: { strokeDashoffset: circumference }, 
          visible: {
              strokeDashoffset: 0, 
              transition: {
                  duration: 2,
                  ease: "easeInOut",
                  delay:1
              },
          },
      };
      
    
  return (

    
   <motion.section ref={ref} className='section2-container' >
        <aside className='title1container' >
    <motion.div className='left-circle'   
                        >
                        <motion.svg
      width="1500"
      height="700"
      viewBox="0 0 600 600"
      initial="hidden"
      animate={isInView ? "visible" : ""}
      style={{ transform: 'rotate(-180deg)', transformOrigin: 'center',zIndex:0 }}
    
    >
                        <motion.circle
                        cx="35.5"
                        cy="250"
                        r="230"
                        stroke="#D9D2D2"
                        variants={drawFromTopRight}
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference}
                        custom={2}
                        fill="transparent"
                      />
                            </motion.svg>
                     </motion.div>


    
            <motion.div    initial={{borderLeft:"0px solid #D9D2D2",height:0}} 
            animate={ isInView ? { borderLeft:"1px solid #D9D2D2" ,height:"100%",} : {}} transition={transitionborder}   className='center-line'></motion.div>

            <motion.div className='right-circle'>
            <motion.svg
      width="1500"
      height="700"
      viewBox="0 0 600 600"
      initial="hidden"
      animate={isInView ? "visible" : ""}
      style={{ transform: 'rotate(-360deg)', transformOrigin: 'center' ,zIndex:0}}
    
    >
                        <motion.circle
                        cx="-100"
                        cy="280"
                        r="230"
                        stroke="#D9D2D2"
                        variants={drawFromTopRight}
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference}
                        custom={1}
                        fill="transparent"
                      />
                            </motion.svg>
            </motion.div>
            <motion.p  initial={{opacity:0,y:50}} animate={isInView ?{opacity:1,y:10} : {}} transition={transitiontext}  className='p-quienesomos'>[¿QUIENES SOMOS?]</motion.p>
            </aside>
        <aside>
            <motion.p initial={{opacity:0,y:50}} animate={isInView ?{opacity:1,y:10} : {}} transition={transitiontext} className='description-p'>Somos un equipo de entusiastas del cuidado de la piel. Comprometidos con la innovación y la calidad, combinamos la ciencia con la naturaleza para crear soluciones de cuidado de la piel que nutren y transforman.</motion.p>
        </aside>
        <aside>
       <motion.p initial={{opacity:0,y:50}} animate={isInView ?{opacity:1,y:10} : {}} transition={transitiontext} className='welcome-p'> Bienvenido a nuestro viaje<br></br> de cuidado de la piel.</motion.p>
        </aside>
   </motion.section>
  )
}

export default Seccion2