import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrSinhVien: [
        {maSinhVien:1,tenSinhVien:'Nguyễn Văn A',email:'email@gmail.com',soDienThoai:'090909090'}
    ]

}

const sinhVienReducer = createSlice({
  name: 'SinhVienReducer', //tạo ra tên action {type: 'sinhVienReducer/themSinhVien'}
  initialState,
  reducers: {
    themSinhVienAction: (state,action)=>{
        state.arrSinhVien.push(action.payload)
    },
    xoaSinhVienAction: (state,action)=>{
      const maSVXoa = action.payload
      const index = state.arrSinhVien.findIndex(sv => sv.maSinhVien === maSVXoa);
      // Nếu tìm thấy, xóa sinh viên khỏi mảng
      if (index !== -1) {
        state.arrSinhVien.splice(index, 1);
      } 
    },
    suaSinhVienAction: (state, action) => {
      const { maSinhVien, tenSinhVien, email, soDienThoai } = action.payload;
      const index = state.arrSinhVien.findIndex(sv => sv.maSinhVien === maSinhVien);
      if (index !== -1) {
        state.arrSinhVien[index] = { maSinhVien, tenSinhVien, email, soDienThoai };
      }
    }
  }
});

export const {themSinhVienAction,xoaSinhVienAction,suaSinhVienAction} = sinhVienReducer.actions

export default sinhVienReducer.reducer