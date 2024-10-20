import { useEffect } from 'react'
import Lenis from 'lenis'
import HeroPage from '../components/Hero/HeroPage'
import Perfomance from '../components/PerfomanceSection/Perfomance'

import 'lenis/dist/lenis.css'
import Seccion2 from '../components/whoweareSection/Seccion2'
import AtomSection from '../components/AtomSection/AtomSection'
import IngredientsSection from '../components/Ingredients/IngredientsSection'
import SpecialSection from '../components/Special/SpecialSection'
import ShopSection from '../components/Shop/ShopSection'




const Layout = () => {


  useEffect(() => {
    const lenis = new Lenis({
      smooth: true, // Activa el smooth scroll
      duration: 1.5, // Opcional: Ajusta la duración del scroll suave
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Función de easing personalizada
      direction: 'vertical', // Scroll en vertical
      gestureDirection: 'vertical', // Reconocer gestos de scroll vertical
      smoothTouch: true, // Suaviza el scroll en dispositivos táctiles
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup para cuando el componente se desmonte
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>

    <HeroPage/>
    <Seccion2/>
    <Perfomance/>
    <AtomSection/>
    <IngredientsSection/>
    <SpecialSection/>
    <ShopSection/> 
    
    
    </>
  )
}

export default Layout