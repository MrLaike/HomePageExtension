<template>
	<div class="datetime">
		<p class="time">{{hours}} : {{minutes}} : {{seconds}}</p>
		<p class="date">{{date}}</p>
	</div>
</template>

<script>
	export default{
		data: function() {
			return {
				time: this.getTime(),
				hours: 0,
				minutes: 0,
				seconds: 0,
				date: this.getDate()
			}
		},
		watch: {
			seconds: function(){
				return this.seconds
			}
		},
		methods: {
			getTime: function(){
				let that = this
				setInterval(function(){
					let date = new Date()
					that.hours = (date.getHours() < 10 ? '0' : '') + date.getHours()
					that.minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
					that.seconds = (date.getSeconds() < 10 ? '0'  : '') + date.getSeconds() 
				}, 1000)
			},
			getDate: function(){
				let date = new Date()
				let day = date.getDate()
				let month = date.getMonth() + 1
				let year = date.getFullYear()
				return day + " - " + month + " - " + year 
			}
		}

	}
</script>
