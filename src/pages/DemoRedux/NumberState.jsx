import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

const NumberState = () => {
    //useSekector: Dùng để lấy dữ liệu từ redux về component
    const {number,fSizeState} = useSelector((state)=> state)
    //useDispatch: là hàm dùng để đưa dữ liệu (action) lên redux
    const dispatch = useDispatch();

    // const fSizeState= useSelector((state)=> state.fSizeState)



    const handleLike = () =>{
        //Gửi dữ liệu lên redux -> action = {type:'', payload:''}
        const action = {
            type: 'LIKE_NUMBER', //thuộc tính bắt buộc phải có và không trùng với action khác
            payload: number+ 1
        };
        //Dùng useDispatch đưa dữ liệu lên redux
        dispatch(action);
    }


  return (
    <div className='container'>
        <h1>Like app</h1>
        <h3>{number} <i className="fa fa-heart fs-1 text-danger"></i></h3>
        <button className='btn btn-success mt-2' onClick={()=>{
            handleLike()
        }}><i className='fa fa-heart'></i></button>

        <hr />
        <h3>Zoom app</h3>
        <p style={{fontSize:fSizeState}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque deleniti nostrum maiores nobis, reprehenderit provident iure quod animi non. Odit!</p>
        <button className='btn btn-primary me-2' onClick={()=>{
            const action ={
                //B1: tạo ra action object có type và payload
                type: 'CHANGE_FONT_SIZE',
                payload: 1
            };
            //B2 gửi action lên redux xử lý
            dispatch(action);
        }}>+</button>
        <button className='btn btn-primary me-2' onClick={()=>{
            const action ={
                type: 'CHANGE_FONT_SIZE',
                payload: -1
            }
            dispatch(action);
        }}>-</button>

      
    </div>
  )
}

export default NumberState
