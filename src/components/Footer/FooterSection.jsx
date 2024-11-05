import React from 'react'
import '../Footer/FooterStyles.css'
import CardFooter from './CardFooter'
const FooterSection = () => {
  return (
    <section className='footer-container'>
      <aside className='footer-title'>
        <h1 className='h1-footer'>Minimalist</h1>
      </aside>
      <div className='footer-imagen-div'>
        <aside className='about-us-footer'>
        <ul className="listfooter">
          <li className="info-footer">Sobre Nosotros</li>
          <li className="info-footer">Tienda</li>
          <li className="info-footer">Tecnología</li>
          <li className="info-footer">Contactanos</li>
  </ul>
    
<CardFooter/>
   
        </aside>
        <aside  className='footer-imagen-container'>
          <img className='footer-imagen' src='Images/Footer/FooterImagen.webp' alt='footer-imagen'></img>
        </aside>
      </div>
    </section>
  )
}

export default FooterSection