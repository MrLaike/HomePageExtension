<template>
	<div class="settings">
		<a href="#" v-click-outside="close" @click="open"><i class="fas fa-cog"></i></a>
		<div class="settings-panel" :class="{ open: isOpened }">
			<h3>Settings</h3>
			
			<h4>Theme</h4>
		</div>
	</div>
</template>
<script>
import ClickOutside from 'vue-click-outside';

export default {
	name: 'Settings',
	data () {
	return {
		isOpened: false,
		}
	},
	methods: {
		open() {
			this.isOpened = true
		},
		close() {
			this.isOpened = false
		}
	},
	mounted() {
		this.popupItem = this.$el
	},
	directives: {
		ClickOutside
	}
}
</script>