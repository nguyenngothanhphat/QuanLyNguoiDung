import React, { Component } from "react";
import {connect} from 'react-redux';
class FormQuanLyNguoiDung extends Component {
  showUserTypes = () => {
    return this.props.userTypes.map((userType, index) => {
      return (
        <option value="KhachHang" key={index}>{userType.loai}</option>
      )
    })
  }
  render() {
    return (
      <form>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label>Tài khoản</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label>Họ Tên</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label>Mật khẩu</label>
              <input type="password" className="form-control" />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label>Số điện thoại</label>
              <input type="number" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label>Mã loại người dùng</label>
              <select className="form-control">
                {this.showUserTypes()}
              </select>
            </div>
          </div>
        </div>
        <button className="btn btn-success mr-2">Đăng ký</button>
        <button className="btn btn-primary">Cập nhật</button>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userTypes: state.QuanLyNguoiDungReducer.userTypes
  }
}
export default connect(mapStateToProps)(FormQuanLyNguoiDung);