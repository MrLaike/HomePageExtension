<template>
	<div class="datetime">
		<p class="time">{{hours}} : {{minutes}} : {{seconds}}</p>
	</div>
</template>

<script>
	export default{
		data: function() {
			return {
				time: this.getTime(),
				hours: 0,
				minutes: 0,
				seconds: 0
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
					that.hours = date.getHours()
					that.minutes = date.getMinutes()
					that.seconds = date.getSeconds()
				}, 1000)
			}
		}

	}
</script>