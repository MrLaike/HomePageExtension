<template>
	<datetime-module></datetime-module>
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
<style>
	.main{
		height: 80vh;
    	align-items: center;
	}
</style>