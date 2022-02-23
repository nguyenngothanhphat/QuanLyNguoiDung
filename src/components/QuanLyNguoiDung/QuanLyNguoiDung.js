import React, { Component } from "react";
import FormQuanLyNguoiDung from "./FormQuanLyNguoiDung";
import ViewQuanLyNguoiDung from "./ViewQuanLyNguoiDung";
export default class QuanLyNguoiDung extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="form-register mb-5">
          <div className="bg-dark p-2 mb-4">
            <h3 className="text-light">Form đăng ký</h3>
          </div>
          <FormQuanLyNguoiDung />
        </div>
        <div className="user-list">
          <div className="bg-dark p-2 mb-4">
            <h3 className="text-light">Danh sách người dùng</h3>
          </div>
          <ViewQuanLyNguoiDung />
        </div>
      </div>
    );
  }
}
