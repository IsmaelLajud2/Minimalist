import React from 'react'
import '../Special/SpecialStyles.css'
import AnimatedNumber from './AnimatedNumber'
const SpecialSection = () => {
  return (
    <section className='speacial-section-container'>
        <div className='left-special-div'>

        <h1 className='h1-special'>¿Que lo hace <br/> especial?</h1>
        </div>
        <div className='right-special-div'>

        <AnimatedNumber/>
        </div>
    </section>
  )
}

export default SpecialSection