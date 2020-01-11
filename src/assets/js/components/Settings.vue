<template>
	<div class="settings">
		<a href="#" v-click-outside="close" @click="open"><i class="fas fa-cog"></i></a>
		<div class="settings-panel" :class="{ open: isOpened }">
			<h3>Settings</h3>
			
			<h4>Theme</h4>
			
			<h4>Modules</h4>
			<ul class="settings-modules-list">
				<li class="settings-modules-item">
					<input type="checkbox" value="todo" :checked="modules.todo.checked" @change="toggle">
					<p>ToDo </p>
				</li>
				<li class="settings-modules-item">
					<input type="checkbox" value="gitTop" :checked="modules.gitTop.checked" @change="toggle">
					<p>GitTop</p>
				</li>
				<li class="settings-modules-item">
					<input type="checkbox" value="notePad" :checked="modules.notePad.checked" @change="toggle">
					<p>NotePad</p>
				</li>
				<li class="settings-modules-item">
					<input type="checkbox" value="music" :checked="modules.music.checked" @change="toggle">
					<p>Music</p>
				</li>
			</ul>

			<h6>---default module---</h6>
			<select name="default-module" v-model="defaultModule">
				<option value="todo">
					Todo Module
				</option>
				<option value="gittop">
					Git top module
				</option>
				<option value="home">
					Home Module
				</option>
				<option value="bookmark">
					Bookmarks Module
				</option>
			</select>


		</div>
	</div>
</template>
<script>
import ClickOutside from 'vue-click-outside';

let LOCALSTORAGE_KEY = "configs"

var configStorage = {
	fetch() {
		var configs = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || '[]')
		return configs
	},
	save(configs) {
		//when close tab
		localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(configs))
		
	}
}

let settingConfig = {
	"themes": {
		"dark": {
			"bgColor": "black",
			"fgColor": "white",
		},
		"light": {
			"bgColor": "white",
			"fgColor": "black",
		}
	},
	"modules": {
		"todo": {
			"id": 1,
			"checked": true,
		},
		"notePad": {
			"id": 2,
			"checked": true,
		},
		"music": {
			"id": 3,
			"checked": true,
		},
		"gitTop": {
			"id": 4,
			"checked": true,
		},
		"default": "home"
	},
	"other": {

	}
}
// configStorage.save(settingConfig)

// console.log(configStorage.fetch())
// window.onbeforeunload = function(){
//     return "Are you sure you want to close the window?";
// }
export default {
	name: 'Settings',
	data () {
		return {
			//загрузить через LocalStorage
			configs: "",
			modules: "",
			isOpened: false,
			defaultModule: configStorage.fetch().modules.default || 'home',
		}
	},
	methods: {
		open() {
			this.isOpened = true
		},
		close() {
			this.isOpened = false
		},
		toggle(e) {
			// this.modules.todo.checked = !this.modules.todo.checked
			this.modules[e.target.value].checked = e.target.checked
		},
	},
	watch:{
		modules: function(){
			this.$emit('modules-status', this.modules)

		},
		defaultModule: function(){
			this.modules["default"] = this.defaultModule
		}

		// isOpened: function(){
		// 	this.configs["modules"] = this.modules
		// 	configStorage.save(this.configs)
		// }
	},

	created() {
		this.$emit('modules-status', this.modules)
	},
	mounted() {
		this.popupItem = this.$el
	},
	directives: {
		ClickOutside
	},
	beforeMount () {
		this.configs = configStorage.fetch()
		this.modules = this.configs["modules"]
	},
	beforeUpdate() {

		///Сделать явную зависимость объекта configStorage от module передать не по значею а по ссылке. 
		this.configs["modules"] = this.modules
		configStorage.save(this.configs)
	}
}
</script>