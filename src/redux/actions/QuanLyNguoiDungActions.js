import { ADD_USER, UPDATE_USER } from "../types/QuanLyNguoiDungTypes"

export const addUserAction = (user) => {
  let action = {
    type: ADD_USER,
    user
  }
  return action;
}

export const updateUserAction = (user) => {
  let action = {
    type: UPDATE_USER,
    user
  }
  return action;
}