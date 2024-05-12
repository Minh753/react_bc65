import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { xoaSinhVienAction } from "../../redux/reducers/sinhVienReducer";

const TableListSinhVien = () => {
  const dispatch = useDispatch()
  const { arrSinhVien } = useSelector((state) => state.sinhVienReducer);

  let xoaSinhVien = (maSV)=>{
    const action = xoaSinhVienAction(maSV)
    dispatch(action)
  }
  
  let suaSinhVien = ()=>{

  }
  

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
          {arrSinhVien.map((sv,index) => {
            return (
              <tr key={index}>
                <td>{sv.maSinhVien}</td>
                <td>{sv.tenSinhVien}</td>
                <td>{sv.email}</td>
                <td>{sv.soDienThoai}</td>
                <td>
                  <button className="btn btn-danger mx-2" onClick={()=>{
                    xoaSinhVien(sv.maSinhVien)
                  }}>Xóa</button>
                </td>
                <td>
                  <button className="btn btn-primary mx-2" onClick={()=>{
                    suaSinhVien()
                  }}>Sửa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableListSinhVien;
