import Vue from 'vue';
import App from './components/App.vue';
import style from '../css/style.css';


console.log("Hello");

new Vue({
	el: '#app',
	render: h => h(App)
})

