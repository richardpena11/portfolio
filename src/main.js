import Vue from 'vue'
import App from './App.vue'
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";
import VueResource from 'vue-resource';

//Buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

// vue carousel
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);


// Vue resource
Vue.use(VueResource);

Vue.http.options.root = `https://portfolio-4e66d.firebaseio.com/`

const firebaseConfig = {
  apiKey: "AIzaSyC7zqIFchIbv1CXzI1zzPyxj2f0l4Qlifw",
  authDomain: "portfolio-4e66d.firebaseapp.com",
  databaseURL: "https://portfolio-4e66d.firebaseio.com",
  projectId: "portfolio-4e66d",
  storageBucket: "portfolio-4e66d.appspot.com",
  messagingSenderId: "623532957444",
  appId: "1:623532957444:web:1e1e15d4666ef839fd7a51",
  measurementId: "G-GZMWJQJ6HZ"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.prototype.$analytics = firebase.analytics();

new Vue({
  render: h => h(App),
}).$mount('#app')
