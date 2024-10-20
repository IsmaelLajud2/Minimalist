import React from 'react'
import '../Shop/CardStyles.css'
const CardProduct = ({imagen,category, name,price}) => {
  return (
    <div className='shop-card-product'>
        <div className='shop-imagen-container'>

        <img className='shop-imagen-product' src={imagen} alt='product-imagen'></img>
        </div>
        <div className='shop-card-info'>

      
        <p className='shop-name-product'>{name}</p>
      
        <p className='shop-price-product'>${price}</p>
        </div>
    </div>
  )
}

export default CardProduct