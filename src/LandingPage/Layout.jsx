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
import ReviewsSection from '../components/Reviews/ReviewsSection'
import LocationSection from '../components/Location/LocationSection'
import FooterSection from '../components/Footer/FooterSection'




const Layout = () => {


  useEffect(() => {
    const lenis = new Lenis({
      smooth: true, 
      duration: 2.3, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical', 
      gestureDirection: 'vertical', 
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    
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
    <ReviewsSection/>
    <LocationSection/>
    <FooterSection/>
    
    </>
  )
}

export default Layout