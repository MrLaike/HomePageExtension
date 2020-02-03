<template>
	<div class="home">
		<datetime-module></datetime-module>
		<weather-module></weather-module>
		<random-ideas-module></random-ideas-module>
	</div>
</template>
<script>
	import datetimeModule from './DateTimeModule.vue';
	import weatherModule from './WeatherModule.vue';
	import randomIdeasModule from './RandomIdeasModule.vue';

	export default {
	name: 'HomeModule',
	data () {
		return {
		}
	},
	components: {
		datetimeModule,
		weatherModule,
		randomIdeasModule,
	  }
	}
</script>
