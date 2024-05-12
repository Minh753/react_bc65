import React from "react";
import {Navigate, useNavigate} from 'react-router-dom'
const Login = () => {
  //hook của react router dom giúp chuyển hướng trang sau 1 xử lý
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    const userLogin ={
      email: document.querySelector('#email').value,
      password: document.querySelector('#password').value
    }
    if(userLogin.email == 'minh@gmail.com' && userLogin.password === '123456'){
      //chuyển hướng về page profile
      navigate('/user/profile')
    }else {
      //chuyển hướng về page forgot pass
      navigate('/forgot')
    }
  }

  return (
    <div className="container">
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <h3>Login</h3>
        
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input type="text" className="form-control" name="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input type="password" className="form-control" name="password" id="password" />
        </div>
        <div className="form-group mt-2">
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
