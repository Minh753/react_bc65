import React, { useState } from 'react'

const FormComponent = () => {
    const [useRegister,setUserRegister] = useState({
        email:'',
        fullName:'',
        password:'',
        gender:true,
        phone:''
    })
    const [errUserRegister,setErrUserRegister] = useState({
        email:'',
        fullName:'',
        password:'',
        phone:''
    })
    console.log('userRegister',useRegister)
    const handleChangeInput = async (e)=>{
        let {name,value} = e.target;
        // let newState = {...setUserRegister,[name]:value}
        await setUserRegister({...setUserRegister,[name]:value})//setState render lại giao diện với giá trị state mới
        let errMess = '';
        if(value === ''){
            errMess = `${name} cannot be blank !`
        }else{
            let dataType = e.target.getAttribute('data-type');
            if(dataType === 'email'){
                const regexEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
                if(!regexEmail.test(value)){
                    errMess = `${name} is invalid !!`
                }
            }else if (dataType === 'phone'){
                const phoneRegex = /^(84|0[3|5|7|8|9])+([0-9]{8,9})$/;
                if(!phoneRegex.test(value)){
                    errMess = `${name} is invalid !!`
                }
            }else if (dataType === 'fullName'){
                const nameRegex = /^[\p{L}\s]+$/u;
                if(!nameRegex.test(value)){
                    errMess = `${name} is invalid !!`
                }

            }
            
        }
        setErrUserRegister({
            ...errUserRegister,[name]:errMess
        })

    }
  return (
    <div className='container'>
        <form className='w-50 mx-auto'>
            <h3>Register</h3>
            <div className='form-group'>
                <label>Email</label>
                <input data-type="email" type="text" className='form-control' name='email' id='email' onInput={handleChangeInput}/>
                <p className='text text-danger'>{errUserRegister.email}</p>
            </div>
            <div className='form-group'>
                <label>Full name</label>
                <input data-type="fullName" type="text" className='form-control' name='fullName' id='fullName' onInput={handleChangeInput} />
                <p className='text text-danger'>{errUserRegister.fullName}</p>
                
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type="password" className='form-control' name='password' id='password' onInput={handleChangeInput} />
                <p className='text text-danger'>{errUserRegister.password}</p>
            </div>
            <div className='form-group my-2'>
                <label>Gender</label>
                <input type="radio" className='form-check-input mx-2' name='gender' id='Male' value={'true'} checked={useRegister.gender === 'true'} onChange={handleChangeInput} />
                <label htmlFor="Male">Male</label>
                <input type="radio" className='form-check-input mx-2' name='gender' id='Female' value={'false'} checked={useRegister.gender === 'false'} onChange={handleChangeInput} />
                <label htmlFor="Female">Female</label>
            </div>
            <div className='form-group'>
                <label>Phone</label>
                <input data-type="phone" type="number" className='form-control' name='phone' id='phone' onInput={handleChangeInput} />
                <p className='text text-danger'>{errUserRegister.phone}</p>
            </div>
            <div className='form-group'>
                <button className='btn btn-primary' type='submit'>Register</button>

            </div>


            
        </form>
      
    </div>
  )
}

export default FormComponent
