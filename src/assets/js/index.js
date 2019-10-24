import '../css/style.css';
import Vue from 'vue';
import App from './components/App.vue';



console.log("Hello");

new Vue({
	el: '#app',
	render: h => h(App)
})

