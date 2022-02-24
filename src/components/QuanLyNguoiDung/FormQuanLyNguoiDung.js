import React, { Component } from "react";
import {connect} from 'react-redux';
import { addUserAction } from "../../redux/actions/QuanLyNguoiDungActions";
class FormQuanLyNguoiDung extends Component {
  state = {
    taiKhoan: '',
    hoTen: '',
    matKhau: '',
    soDienThoai: '',
    email: '',
    loaiNguoiDung: ''
  }
  showUserTypes = () => {
    return this.props.userTypes.map((userType, index) => {
      return (
        <option value="KhachHang" key={index}>{userType.loai}</option>
      )
    })
  }
  handleChange = (e) => {
    let {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(addUserAction(this.state))
  }
  handleUpdate = () => {
    
  }
  render() {
    return (
      <form>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label>Tài khoản</label>
              <input type="text" name="taiKhoan" className="form-control" onChange={this.handleChange} />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label>Họ Tên</label>
              <input type="text" name="hoTen" className="form-control" onChange={this.handleChange} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label>Mật khẩu</label>
              <input type="password" name="matKhau" className="form-control" onChange={this.handleChange} />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label>Số điện thoại</label>
              <input type="number" name="soDienThoai" className="form-control" onChange={this.handleChange} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" className="form-control" onChange={this.handleChange} />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label>Mã loại người dùng</label>
              <select name="loaiNguoiDung" className="form-control">
                {this.showUserTypes()}
              </select>
            </div>
          </div>
        </div>
        <button className="btn btn-success mr-2" onClick={this.handleSubmit}>Đăng ký</button>
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