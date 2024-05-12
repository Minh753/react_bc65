import React from 'react'

const SanPham = (props) => {
    let {item} = props;

    // const formatPrice = (price) => {
    //     // Chuyển đổi giá trị giá thành chuỗi và thêm dấu chấm mỗi 3 số
    //     const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    //     // Thêm "VNĐ" vào cuối giá trị
    //     return `${formattedPrice} VNĐ`;
    // }
  return (
    <div className='card'>
                <img src={item.hinhAnh} alt="..." />
                <div className='card-body'>
                    <h3>{item.tenSP}</h3>
                    <p>{formatPrice(item.giaBan)}</p>
                    <button className='btn btn-danger' onClick={()=>{
                        //cài đặt sự kiên click vào nút button và chuyển item vào hàm xem chi tiết
                        props.xemChiTiet(item)
                    }}>Xem chi tiết</button>
                </div>
            </div>
  )
}

export default SanPham
