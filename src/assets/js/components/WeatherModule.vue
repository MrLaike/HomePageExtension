<template>
	<div class="weather">
		<!-- {{ weather }} -->
		<h3>{{ city }}</h3>
		<p>Temp: {{ weather.data.main.temp }}</p>
		<p>Feels like: {{ weather.data.main.feels_like }}</p>
		<p>Min Temp: {{ weather.data.main.temp_min }}</p>
		<h4>Wind: </h4>
		<p>Speed: {{ weather.data.wind.speed }}</p>
		<p>Degree: {{ weather.data.wind.deg }}</p>
		<img :src="'http://openweathermap.org/img/wn/' + weather.data.weather[0].icon + '@2x.png'" alt="">
	</div>
</template>

<script>
	import axios from 'axios';
	const API_KEY = '4323547974d336c1256a9ac0d40bd330';

	var configStorage = {
		localStorageKey: null,
		ttl: 2, // clear this localstorage every 2 hour
		fetch() {
			return JSON.parse(localStorage.getItem(this.localStorageKey) || '{}')
		},
		save(configs) {
			//when close tab
			localStorage.setItem(this.localStorageKey, JSON.stringify(configs))
			
		},
		checkTimeleft() {
			let now = new Date().getTime();
			let storageTime = localStorage.getItem(this.localStorageKey + 'Timeleft') 
			if(now - storageTime > this.ttl * 60 * 60 * 1000){
				localStorage.setItem(this.localStorageKey, 0)
			}
		}
	}

	export default{
		name: 'WeatherModule',
		data(){
			return {
				weather: '',
				city: 'Mokrous,ru',
				metric: 'metric',
				icon: ''
			}
		},
		methods: {
			getWeather(){
				configStorage.localStorageKey = 'weather'
				configStorage.checkTimeleft();
				
				if(!!configStorage.fetch()){
					this.weather = configStorage.fetch()
				}else{
					axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&units=' + this.metric + '&appid=' + API_KEY).then(response => {configStorage.save(response);this.weather = response;})
					localStorage.setItem('weatherTimeleft', new Date().getTime())
				}
			}
		},
		mounted(){
			this.getWeather()
		}	
	}
</script>