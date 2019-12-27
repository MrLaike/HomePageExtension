<template>
	<div class="right-section">
		<a href="#" class="block-s6 bookmark-icon" @click="change('todoModule')"><i class="fas fa-list-alt"></i></a>
		<a href="#" class="block-s6 bookmark-icon" @click="change('notepadModule')"><i class="far fa-sticky-note"></i></a>
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