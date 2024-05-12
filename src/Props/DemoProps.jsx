import React from 'react'
import ProductCard from './ProductCard'

const DemoProps = () => {
  const product = {
    id:1,name:'iphone',price:1000,img:'https://i.pravatar.cc?u=1'
  }

  return (
    <div className='container'>
        <h3>Props</h3>
        <p className='abc'></p>
        <input value={'abc'} />
        <div className='w-25'>
        <ProductCard prod={product}/>
        </div>
      
    </div>
  )
}

export default DemoProps
