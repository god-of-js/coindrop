import Vue from "vue";
import Firebase from "../plugins/firebase.js";
import api from "../plugins/api.js";
import CustomInput from "@/components/custom-components/CustomInput.vue";
import CustomButton from "@/components/custom-components/CustomButton.vue";
import VueIziToast from "vue-izitoast";
import "izitoast/dist/css/iziToast.css";
Vue.use(VueIziToast);
Vue.component("CustomInput", CustomInput);
Vue.component("CustomButton", CustomButton);
Vue.prototype.$Firebase = new Firebase();
Vue.prototype.$api = api;
