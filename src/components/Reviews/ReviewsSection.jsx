import React from 'react'
import '../Reviews/ReviewStyles.css'
import CardReviews from './CardReviews'
const ReviewsSection = () => {
  return (
    <section className='review-section-container'>
      <aside className='h1-background-review'>

            <h1 className='review-h1' >Nuestros Clientes</h1>
      </aside>
      <div className='cards-andinfo-container'>
      <aside className='review-container'>
          <p className='review-clientesnumber'>[20k Clientes Felices]</p>
          <p className='review-clienttext'>Nuestros productos, comprobados científicamente <br/> y avalados por nuestros clientes.</p>
      </aside>
      <aside className='right-card-container'>
        <CardReviews/>
      </aside>
      </div>
    </section>
  )
}

export default ReviewsSection