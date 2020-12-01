import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import store from './store';
import router from './router';
import messagePlugin from '@/utils/message.plugin'
import dateFilter from '@/filters/date.filter';
import currencyFilter from "@/filters/currency.filter";
import Loader from "@/components/app/Loader";
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';

import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.component('Loader', Loader);

const firebaseConfig = {
  apiKey: "AIzaSyBPS8gYJzidfHhxxheXUCkrdYIZNNoyy1A",
  authDomain: "vue-study-dev-crm.firebaseapp.com",
  databaseURL: "https://vue-study-dev-crm.firebaseio.com",
  projectId: "vue-study-dev-crm",
  storageBucket: "vue-study-dev-crm.appspot.com",
  messagingSenderId: "322465644106",
  appId: "1:322465644106:web:2106bc0caa0295fc0530b3",
  measurementId: "G-8NZV242NCH"
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
})


