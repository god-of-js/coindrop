import Vue from "vue";
import CustomInput from "@/components/custom-components/CustomInput.vue";
import CustomButton from "@/components/custom-components/CustomButton.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);
Vue.component("CustomInput", CustomInput);
Vue.component("CustomButton", CustomButton);
