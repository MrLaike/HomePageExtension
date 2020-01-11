<template>
	<div class="right-section">
		<a href="#" class="block-s6 todo-icon" @click="change('todoModule')" v-show="showModules.todo.checked"><i class="fas fa-list-alt"></i></a>
		<a href="#" class="block-s6 notepad-icon" @click="change('notepadModule')" v-show="showModules.notePad.checked"><i class="far fa-sticky-note"></i></a>
		<a href="#" class="block-s6 gittop-icon" @click="change('gittopModule')" v-show="showModules.gitTop.checked"><i class="fab fa-git-square"></i></a>
		<a href="#" class="block-s6 music-icon" @click="change('musicModule')" v-show="showModules.music.checked"><i class="fas fa-music"></i></a>			
	</div>	

</template>

<script>
	export default{
		props: ['showModules'],
		data() {
			return {
	
			}
		},
		methods: {
			change(moduleName) {
				this.$emit('change-module', moduleName)
			}
		}
	}
</script>