const initialState = {
  listUsers: [
    {stt: 1, taiKhoan: 'lethituyet', hoTen: 'Lê Thị Tuyết', matKhau: '12345', email: 'tuyet@gmail.com', soDienThoai: '0943212321', loaiNguoiDung: 'KhachHang'},
    {stt: 2, taiKhoan: 'thanphat', hoTen: 'Nguyễn Ngô Thành Phát', matKhau: 'p123', email: 'phat@gmail.com', soDienThoai: '0943212356', loaiNguoiDung: 'KhachHang'},
  ],
  userTypes: [
    {id: 1, loai: 'Khách Hàng'},
    {id: 2, loai: 'Nhân Viên'},
    {id: 3, loai: 'VIP'}
  ]
};

const QuanLyNguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default QuanLyNguoiDungReducer;
