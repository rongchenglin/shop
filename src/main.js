import Vue from "vue";
import app from "./app.vue"
// import MintUI from "mint-ui";
import "mint-ui/lib/style.css"
import { Header } from 'mint-ui';
import "../lib/mui/css/mui.css"

Vue.component(Header.name, Header);
var vm = new Vue({
    el: "#app",
    data: {
        msg: "123"
    },
    render: c => c(app),
});
