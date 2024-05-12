import React from 'react'
//import css(cách 1):sẽ ảnh hưởng toàn bộ trang
import '../../assets/css/style.css'
//import css(cách 2):css module chỉ ảnh hưởng thẻ dùng
import style from './styleWithComponent.module.css'

const StyleWithComponent = () => {
    return (
        <div className='container'>
            <p className='text-red'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consequatur?</p>
            <hr />

            <p className={`${style['text-green']} bg-dark`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, deserunt?</p>
            <hr />
            <p style={{fontSize:'50px',paddingTop:'30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vitae omnis corrupti nobis, modi ipsam labore. Repellendus esse deleniti in omnis beatae necessitatibus vitae exercitationem, architecto aperiam ratione facilis consequuntur.</p>
            {/* Có thể viết css theo cách thường và dùng tool "HTML to css" */}
            <p style={{color: 'red'}}>Lorem ipsum dolor sit amet.</p>
            
            
        </div >
    )
}

export default StyleWithComponent