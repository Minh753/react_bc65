import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  suaSinhVienAction,
  xoaSinhVienAction,
} from "../../redux/reducers/sinhVienReducer";
import { useFormik } from "formik";

const TableListSinhVien = () => {
  const dispatch = useDispatch();
  const { arrSinhVien,sinhVienEdit } = useSelector((state) => state.sinhVienReducer);
  // console.log(sinhVienEdit.maSinhVien)
  
  

  let xoaSinhVien = (maSV) => {
    const action = xoaSinhVienAction(maSV);
    dispatch(action);
  };

  const handleSuaSinhVien = (sinhVien) => {
    const action = suaSinhVienAction(sinhVien);
    dispatch(action);
  };

  

  return (
    <div className="container">
      <h3>Danh sách sinh viên</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Mã sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrSinhVien.map((sv, index) => {
            return (
              <tr key={index}>
                <td>{sv.maSinhVien}</td>
                <td>{sv.tenSinhVien}</td>
                <td>{sv.email}</td>
                <td>{sv.soDienThoai}</td>
                <td>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => {
                      xoaSinhVien(sv.maSinhVien);
                    }}
                  >
                    Xóa
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      handleSuaSinhVien(sv);
                    }}
                  >
                    Sửa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
      <div className="container">
        <form className="w-50 mx-auto" >
          <h3>Chỉnh sửa thông tin</h3>
          <div className="form-group">
            <p>Mã sinh viên</p>
            <input
              type="number"
              className="form-control"
              name="maSinhVien"
              placeholder={sinhVienEdit ? sinhVienEdit.maSinhVien : ''}
              // onChange={frmSV.handleChange}
              // value={sinhVienEdit.maSinhVien}
            />
          </div>
          <div className="form-group">
            <p>Tên sinh viên</p>
            <input
              type="text"
              className="form-control"
              name="tenSinhVien"
              placeholder={sinhVienEdit ? sinhVienEdit.tenSinhVien : ''}
              
              // onChange={frmSV.handleChange}
              // value={sinhVienEdit.tenSinhVien}
            />
          </div>
          <div className="form-group">
            <p>Email</p>
            <input
              type="text"
              className="form-control"
              name="email" 
              placeholder={sinhVienEdit ? sinhVienEdit.email : ''}
              // onChange={frmSV.handleChange}
              // value={sinhVienEdit.email}
            />
          </div>
          <div className="form-group">
            <p>Số điện thoại</p>
            <input
              type="number"
              className="form-control"
              name="soDienThoai"
              placeholder={sinhVienEdit ? sinhVienEdit.soDienThoai : ''}
              // onChange={frmSV.handleChange}
              // value={sinhVienEdit.soDienThoai}
            />
          </div>
          <div className="form-group mt-2">
            <button className="btn btn-danger" type="submit">
              Lưu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TableListSinhVien;
