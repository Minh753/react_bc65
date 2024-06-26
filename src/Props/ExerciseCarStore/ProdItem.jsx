import React from 'react'

const ProdItem = (props) => {
  const {item,setProdDetail} = props
  return (
    <div className='card'>
      <img src={item.img} alt="..." />
      <div className='card-body'>
        <h3>{item.name}</h3>
        <p>{item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
        <button className='btn btn-success'data-bs-toggle="modal" data-bs-target="#modalId" onClick={()=>{
          setProdDetail(item)
        }}>View detail</button>
      </div>

    </div>
  )
}

export default ProdItem
