import React from 'react'
import ProductItem from './ProductItem'

function ProductList( {productList} ) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
      {productList.map(item=>(
        <div> 
            <ProductItem  product={item} key={item.id}/>
        </div>
      ))}
    </div>
  )
}

export default ProductList
