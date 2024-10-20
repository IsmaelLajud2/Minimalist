import React from 'react'
import '../Shop/ShopStyles.css'
import dataProduct from "../Shop/Products.json"
import CardProduct from './CardProduct'


const ShopSection = () => {
  return (
    <section className='shop-sectioncontainer'>
      <div className='right-div-filter'>
        <h1 className='shop-h1title'>Productos Populares</h1>
          <div className='filters'>
            <button className='filter-button'>Skin</button>
            <button className='filter-button'>Body</button>
            <button className='filter-button'>Hair</button>
            <button className='filter-button'>All Products</button>
          </div>
      </div>
      <div className='div-card-container'>

     
        <div className='card-container'>
        {
            dataProduct.Products.map((product,index) =>{
                return (
                    <CardProduct key={index} imagen={product.imagen} category={product.category} name={product.name} price={product.price}></CardProduct>
                )
            })
        }
         </div>
        </div>
    </section>
  )
}

export default ShopSection