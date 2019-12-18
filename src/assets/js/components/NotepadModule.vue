<template>
	<div class="notepad">
		<div :class="{ show: isEditing }" class="editor">
			<div class="tool-bar">
				<button class="notepad__button" @click="clean">Clean</button>
			</div>
			<textarea :value="markdownText" @input="update" cols="30" rows="20"></textarea>
		</div>
		<div class="text-boarder" :class="{ night: isNight }">
			<div class="tool-bar">
				<button class="notepad__button" name="isEditing" @click="toggle">Edit</button>
				<button class="notepad__button" name="isNight" @click="toggle">{{ isNight ? 'light' : 'night' }}</button>
			</div>
			<div v-html="getHtml"></div>
		</div> 
	</div>
</template>

<script>
	import markdown from 'markdown-it';
	let md = new markdown()
	export default {
		data: function() {
			return {
				markdownText: '# Hello',
				isEditing: false,
				isNight: true,
			}
		},
		computed: {
			getHtml: function(){
				return md.render(this.markdownText)
			}
		},
		methods: {
			update: function(e){
				this.markdownText = e.target.value

			},
			toggle: function(e){
				this[e.target.name] ? this[e.target.name] = false : this[e.target.name] = true
			},
			clean: function(){
				this.markdownText = ''
			},

		}
	}
</script>

