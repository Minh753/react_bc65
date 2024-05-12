//state: state là giá trị thay đổi bởi sự kiện trong component
import React, { useState } from 'react'

const DemoState = () => {
    const [state, setState] = useState(1)
    const [size, setSize] = useState(17)
    const [carColor, setCarColor] = useState('/img/black-car.jpg')

    return (
        <div className='container'>
            <h3>state</h3>
            <h3>Count: <span className='text-danger'>{state}</span></h3>
            <button className='btn btn-dark' onClick={() => {
                setState(state + 1)
            }}>+</button>
            <button className='btn btn-dark ms-2' onClick={() => {
                setState(state - 1)
            }}>-</button>
            <hr />
            <p style={{ fontSize: size }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, et!</p>
            <button className='btn btn-success' onClick={() => {
                setSize(size + 10)
            }}>zoom in</button>
            <button className='btn btn-success' onClick={() => {
                setSize(size - 10)
            }}>zoom out</button>

            <hr />
            <h3>Change color car</h3>
            <div className='row'>
                <div className='col-4'>
                    <img className='w-100' src={carColor} alt="..." />
                </div>
                <div className='col=8 my-2'>
                    <button style={{ background: 'red' }} className='btn mx-2 text-white' onClick={() => {
                        setCarColor('/img/red-car.jpg')
                    }}>Red color</button>
                    <button style={{ background: 'gray' }} className='btn mx-2 text-white' onClick={() => {
                        setCarColor('/img/silver-car.jpg')
                    }} >Gray color</button>
                    <button style={{ background: 'black' }} className='btn mx-2 text-white' onClick={() => {
                        setCarColor('/img/black-car.jpg')
                    }}>Black color</button>

                </div>


            </div>


        </div>
    )
}

export default DemoState