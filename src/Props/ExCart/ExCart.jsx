import React, { useState } from 'react'
import Cart from './Cart'
import ProductListItem from './ProductListItem'


const products = [
  { id: 1, name: 'black car', img: './img/black-car.jpg', price: 1000 },
  { id: 2, name: 'red car', img: './img/red-car.jpg', price: 2000 },
  { id: 3, name: 'silver car', img: './img/silver-car.jpg', price: 3000 },
  { id: 4, name: 'Steel car', img: './img/steel-car.jpg', price: 4000 }
  ];

const ExCart = () => {

  let [arrProductCart,setArrProductCart] = useState([
    { id: 4, name: 'Steel car', img: './img/steel-car.jpg', price: 4000, quantity:5 },
    { id: 3, name: 'silver car', img: './img/silver-car.jpg', price: 3000, quantity:5 }
  ])
//Định nghĩa logic thay đổi state tại component chứa state
  const addToCart = (prodClick) =>{
    //Thêm 1 thuộc tính vào prodClick tạo ra product trong giỏ hàng có thêm số lượng
    let prodCart = {...prodClick,quantity:1}
    //Thêm sản phẩm vào giỏ hàng
    //Kiểm tra sản phẩm đã có trong giỏ hàng hay chưa
    let prod = arrProductCart.find(p => p.id === prodClick.id);
    if(prod){//Nếu object có chứa id đó trong giỏ hàng
      prod.quantity +=1 //tăng số lượng
    }else {
      arrProductCart.push(prodCart) //Chưa có thì thêm vào
    }
    //Clone object reference value (để hàm setState hiểu là state mới)
    arrProductCart = [...arrProductCart]
    //Cập nhật lại giỏ hàng
    setArrProductCart(arrProductCart)
  }

  const delItem = (idClick)=>{
    // console.log(idClick)
    let index = arrProductCart.findIndex(p => p.id === idClick)
    if(index != -1){
      arrProductCart.splice(index,1);
    }
    //Cập nhật lại giỏ hàng
    setArrProductCart([...arrProductCart])  
  }

  const changeQuantity = (idClick,num)=>{
    let prodCart = arrProductCart.find(p => p.id === idClick);
    if(prodCart){
      prodCart.quantity +=num;
      if (prodCart.quantity <= 0) { // Nếu số lượng nhỏ hơn hoặc bằng 0
        // Loại bỏ phần tử khỏi mảng
        arrProductCart = arrProductCart.filter(p => p.id !== idClick);
    } else if (prodCart.quantity < 0) { // Nếu số lượng trở thành số âm sau khi thay đổi
        prodCart.quantity = 0; // Đặt lại số lượng thành 0
    }
    }
    setArrProductCart([...arrProductCart])
  }

  return (
    <div className='container'>
      <h3>Shopping Cart</h3>
      <Cart arrProductCart={arrProductCart} delItem={delItem} changeQuantity={changeQuantity}/>
      <h3>Product List</h3>
      <ProductListItem products={products} addToCart = {addToCart}/>

    </div>
  )
}

export default ExCart
