import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { themSinhVienAction } from "../../redux/reducers/sinhVienReducer";
const FormSinhVien = () => {
const dispatch = useDispatch()
    
    const frmSV = useFormik({
        initialValues:{
            maSinhVien:'',
            tenSinhVien:'',
            email:'',
            soDienThoai:'',
        },
        onSubmit:(sinhVien) =>{
            //cách 1
        //    const action = {
        //     type: 'sinhVienReducer/themSinhVienAction',
        //     payload: sinhVien
        //    }
            //Cách 2:
            const action = themSinhVienAction(sinhVien);


           dispatch(action);
        }
    })


  return (
    <div className="container">
      <form className="w-50 mx-auto" onSubmit={frmSV.handleSubmit}>
        <h3>Thêm thông tin sinh viên</h3>
        <div className="form-group">
            <p>Mã sinh viên</p>
            <input type="number" className="form-control" name="maSinhVien" onInput={frmSV.handleChange}/>
        </div>
        <div className="form-group">
            <p>Tên sinh viên</p>
            <input type="text" className="form-control" name="tenSinhVien" onInput={frmSV.handleChange}/>
        </div>
        <div className="form-group">
            <p>Email</p>
            <input type="text" className="form-control" name="email" onInput={frmSV.handleChange}/>
        </div>
        <div className="form-group">
            <p>Số điện thoại</p>
            <input type="number" className="form-control" name="soDienThoai" onInput={frmSV.handleChange}/>
        </div>
        <div className="form-group mt-2">
            <button className="btn btn-danger" type="submit">Thêm sinh viên</button>
        </div>
      </form>
    </div>
  );
};

export default FormSinhVien;
