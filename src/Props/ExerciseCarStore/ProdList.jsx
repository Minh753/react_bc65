import React from 'react'
import ProdItem from './ProdItem'

const ProdList = (props) => {

  

  let {arrProduct,setProdDetail} = props
  return (
    <div className='row' >
      {arrProduct.map((item)=>{
        return <div className='col-3 mt-2' key={item.id}>
          <ProdItem item={item} setProdDetail={setProdDetail}/>
        </div>
      })}
      
    </div>
  )
}

export default ProdList
