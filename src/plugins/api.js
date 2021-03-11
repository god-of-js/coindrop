import axios from "axios";
import get from "lodash/get";
import Vue from "vue";
import { BASE_URL } from "../config/config";
import Cookies from "./cookies";
const instance = new Vue();
const token = Cookies.getToken();
console.log(`${BASE_URL}/api/v1`);
const config = {
  baseURL: `${BASE_URL}/api/v1`,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${token}`
  }
};
const position = {
  position: "topRight"
};

const service = axios.create(config);
service.interceptors.response.use(
  response => {
    console.log(response);
    const description = get(response, "data.message", "Success");
    if (!response.data.customHandle) {
      instance.$toast.success(description, "Success", position);
    }
    return Promise.resolve(response);
  },
  err => {
    const description = get(err.response, "data.message", "Success");
    console.log(err.response, "response");
    if (!err.response.data.customHandle) {
      instance.$toast.error(description, "Error", position);
    }
    return Promise.reject(err.response);
  }
);
export default service;
