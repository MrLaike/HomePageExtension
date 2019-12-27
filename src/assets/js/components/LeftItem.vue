<template>
	<div class="left-section">
		<a href="#" class="block-s6 home-icon" @click="change('homeModule')"> <i class="fas fa-home"></i> </a>
		<a href="#" class="block-s6 bookmark-icon" @click="change('bookmarkModule')"> <i class="fas fa-bookmark"></i> </a>
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