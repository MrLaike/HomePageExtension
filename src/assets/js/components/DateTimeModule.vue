<template>
	<div class="datetime">
		<p class="time">{{ time }}</p>
		<p class="date">{{ date }}</p>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				time: "",
				date: ""
			}
		},
		computed:{
			getTime() {

				//Solution problem with show delay
				let that = this
				setInterval(function(){
					let date = new Date()
					let hours = (date.getHours() < 10 ? '0' : '') + date.getHours()
					let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
					let seconds = (date.getSeconds() < 10 ? '0'  : '') + date.getSeconds()
					that.time = hours + " : " + minutes +" : " + seconds
				}, 1000)
			},
			getDate() {
				let date = new Date()
				let day = date.getDate()
				let month = date.getMonth() + 1
				let year = date.getFullYear()
				this.date = day + " - " + month + " - " + year 
			},
		},
		methods: {
			// getTime() {
			// 	let that = this
			// 	setInterval(function(){
			// 		let date = new Date()
			// 		that.hours = (date.getHours() < 10 ? '0' : '') + date.getHours()
			// 		that.minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
			// 		that.seconds = (date.getSeconds() < 10 ? '0'  : '') + date.getSeconds() 
			// 	}, 1000)
			// },
		},

		beforeMount() {
			this.getTime
			this.getDate
		}

	}
</script>
