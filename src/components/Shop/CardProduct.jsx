import React from 'react'
import '../Shop/CardStyles.css'
const CardProduct = ({imagen,category, name,price}) => {
  return (
    <div className='card-product'>
        <div className='imagen-container'>

        <img className='imagen-product' src={imagen} alt='product-imagen'></img>
        </div>
        <div className='card-info'>

      
        <p className='name-product'>{name}</p>
      
        <p className='price-product'>${price}</p>
        </div>
    </div>
  )
}

export default CardProduct