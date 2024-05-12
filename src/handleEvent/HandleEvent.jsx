import React from 'react'

const HandleEvent = () => {
    const showMessage = (e) => {
        console.log('hello hello')
        e.target.className = 'btn btn-dark';
        e.target.innerHTML = 'clicked';

    }
    const showMessageName = (name) => {
        console.log('helle helle', name)
    }
    return (
        <div className='container'>
            <h3>Handle event</h3>
            <button className='btn btn-dark' onClick={() => {
                console.log('clicked')
            }}>click me</button>
            <br /> <br />
            <button className='btn btn-danger' onClick={showMessage}>show message</button>

            <button className='btn btn-danger' onClick={showMessage}>show message</button>

            <button className='btn btn-danger' onClick={(e) => {
                showMessageName('Minh')
            }}>show message</button>

            <input className='w-25 form-control' onInput={(e) => {
                const value = e.target.value;
                document.querySelector('#txt').innerHTML = value;
                console.log('value', value);
            }} />
            <span id='txt' className='d-block my-2'></span>

        </div>
    )
}

export default HandleEvent