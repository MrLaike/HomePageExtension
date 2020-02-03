<template>
	<div class="home">
		<datetime-module></datetime-module>
		<weather-module></weather-module>
	</div>
</template>
<script>
	import datetimeModule from './DateTimeModule.vue';
	import weatherModule from './WeatherModule.vue';

	export default {
	name: 'HomeModule',
	data () {
		return {
		}
	},
	components: {
		datetimeModule,
		weatherModule,
	  }
	}
</script>
