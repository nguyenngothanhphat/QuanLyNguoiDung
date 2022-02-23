import React, { Component } from "react";
import { connect } from "react-redux";
class ViewQuanLyNguoiDung extends Component {
  showUsers = () => {
    return this.props.listUsers.map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.stt}</td>
          <td>{user.taiKhoan}</td>
          <td>{user.hoTen}</td>
          <td>{user.matKhau}</td>
          <td>{user.email}</td>
          <td>{user.soDienThoai}</td>
          <td>{user.loaiNguoiDung}</td>
          <td>
            <button className="btn btn-primary mr-2">Chỉnh sửa</button>
            <button className="btn btn-danger">Xóa</button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <table class="table table-striped table-inverse">
        <thead class="thead-inverse">
          <tr>
            <th>STT</th>
            <th>Tài khoản</th>
            <th>Họ tên</th>
            <th>Mật khẩu</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Loại người dùng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.showUsers()}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listUsers: state.QuanLyNguoiDungReducer.listUsers,
  };
};
export default connect(mapStateToProps)(ViewQuanLyNguoiDung);
