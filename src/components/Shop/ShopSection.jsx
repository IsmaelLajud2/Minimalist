import { useState } from 'react';
import '../Shop/ShopStyles.css';
import dataProduct from '../Shop/Products.json';
import CardProduct from './CardProduct';

const ShopSection = () => {
  const [categoryFilter, setCategoryFilter] = useState('hair');
  const isFiltered = categoryFilter !== 'All Products';

  const handleFilter = (category) => {
    setCategoryFilter(category);
  };

  const filterProducts = dataProduct.Products.filter(
    (product) =>
      categoryFilter === 'All Products' || product.category === categoryFilter
  );

  const randomProducts = [...filterProducts].sort(() => Math.random() - 0.5).slice(0, 6)

  return (
    <section className='shop-sectioncontainer'>
      <div className='right-div-filter'>
        <h1 className='shop-h1title'>Productos Populares</h1>
        <div className='filters'>
          <button
            onClick={() => handleFilter('skin')}
            className='filter-button'
          >
            Skin <span className='product-length'>[6]</span>
          </button>
          <button
            onClick={() => handleFilter('body')}
            className='filter-button'
          >
            Body <span className='product-length'>[6]</span>
          </button>
          <button
            onClick={() => handleFilter('hair')}
            className='filter-button'
          >
            Hair <span className='product-length'>[6]</span>
          </button>
          <button
            onClick={() => handleFilter('All Products')}
            className='filter-button'
          >
            All Products <span className='product-length'>[18]</span>
          </button>
        </div>
      </div>
      <div className='div-card-container'>
        <div className='card-container'>
          {randomProducts.map((product,index) => {
            return (
              <CardProduct
                className={isFiltered ? 'card-filtered' : 'card-product'}
                key={`${product.name}-${product.category}-${index}`} 
                imagen={product.imagen}
                category={product.category}
                name={product.name}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
