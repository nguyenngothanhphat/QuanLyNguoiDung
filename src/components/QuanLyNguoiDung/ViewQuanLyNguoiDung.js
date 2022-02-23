import React, { Component } from "react";

export default class ViewQuanLyNguoiDung extends Component {
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
          <tr>
            <td>1</td>
            <td>lethituyet</td>
            <td>Lê Thị Tuyết</td>
            <td>12345</td>
            <td>tuyet@gmail.com</td>
            <td>0954545421</td>
            <td>KhachHang</td>
            <td>
              <button className="btn btn-primary mr-2">Chỉnh sửa</button>
              <button className="btn btn-danger">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
