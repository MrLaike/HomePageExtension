<template>
	<div class="container">
		<div class="wrapper">
			<nav class="nav">
				<left-item  @change-module="setModule"></left-item>
				<search-input @change-module="setModule" @get-result="getResult"></search-input>
				<right-item @change-module="setModule" :show-modules="modulesStatus"></right-item>
			</nav>
			<div class="main">
				<component :is="currentModule" v-bind="currentProperties"></component>
				
			</div>
			<footer class="footer">
				<settings @modules-status="getModulesStatus" ></settings>
			</footer>
		</div>
	</div>
	
</template>

<script>
	import todoModule from './TodoModule.vue';
	import bookmarkModule from './BookmarkModule.vue';
	import homeModule from './HomeModule.vue';
	import searchInput from './SearchInput.vue';
	import rightItem from './RightItem.vue';
	import leftItem from './LeftItem.vue';
	import gittopModule from './GitTopModule.vue';
	import notepadModule from './NotepadModule.vue';
	import newsModule from './RssNewsModule.vue';
	import settings from './Settings.vue';




	export default{
		props: ['showModules'],
		data: function() {
			return {
				bookmarksList: [],
				currentModule: 'homeModule',
				modulesStatus: '',
			}
		},
		computed: {
			currentProperties: function(){
				let that = this
				if(this.currentModule == 'bookmarkModule'){
					return { bookmarks: that.bookmarksList }
				}
			}
		},
		components: {
			homeModule,
			bookmarkModule,
			todoModule,
			searchInput,
			leftItem,
			rightItem,
			gittopModule,
			notepadModule,
			newsModule,
			settings,
		},
		
		methods: {
			toggleMenu() {
				this.isHidden = !this.isHidden
			
			},
			getResult(resultArray) {
				this.bookmarksList = resultArray 
			},
			setModule(moduleName) {
				this.currentModule = moduleName
			},
			getModulesStatus(modulesStatus) {
				this.modulesStatus = modulesStatus
				this.currentModule = this.modulesStatus.default + "Module"
			}
		},
	}

</script>