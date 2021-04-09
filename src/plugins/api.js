import Vue from "vue";
import axios from "axios";
import get from "lodash/get";
import { BASE_URL } from "../config/config";
import Cookies from "./cookies";
import store from "../store/index";
const instance = new Vue();
let token = Cookies.getToken();
let config = {
  baseURL: `${BASE_URL}/api/v1`,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${token}`
  }
};
const service = axios.create(config);
service.interceptors.response.use(
  response => {
    console.log(response);
    const description = get(response, "data.message", "Success");
    if (!response.data.customHandle) {
      instance.$notification.success({
        message: "Success",
        description
      });
    }
    return Promise.resolve(response);
  },
  err => {
    const description = get(
      err.response,
      "data.message",
      "Something went wrong"
    );
    console.log(err.response, err, "response");
    if (!err.response.data.customHandle) {
      instance.$notification.error({
        message: "Error",
        description
      });
    } else if (err.response.data.extraData.login) {
      store.dispatch("user/logout");
    }
    return Promise.reject(err.response);
  }
);
const api = token => {
  token ? (service.defaults.headers.Authorization = `Bearer ${token}`) : false;
  return service;
};
export default api;
