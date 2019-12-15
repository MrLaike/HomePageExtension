<template>
	<div class="left-section">
		<a href="#" class="block-s4 home-icon" @click="change('datetimeModule')"> <i class="fas fa-campground">Home</i> </a>
		<a href="#" class="block-s4 bookmark-icon"> Bookmarks </a>
	</div>
</template>
<script>
	export default{
		data: function(){
			return {

			}
		},
		methods: {
			change: function(moduleName){
				console.log(moduleName)
				this.$emit('change-module', moduleName)
			}
		}
	}
</script>