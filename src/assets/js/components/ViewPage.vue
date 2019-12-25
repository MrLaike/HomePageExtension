<template>
	<div class="wrapper">
		<nav class="nav">
			<left-item  @change-module="setModule"></left-item>
			<search-input @change-module="setModule" @get-result="getResult"></search-input>
			<right-item @change-module="setModule"></right-item>
		</nav>
		<div class="main">
			<!-- <datetime-module></datetime-module> -->
			<!--<weather-module></weather-module>
			
			<p class="today">Today: Read day</p>
			 -->
			<!-- <todo-module></todo-module> -->
			<!-- <bookmark-module v-bind="{bookmarks: bookmarksList}"></bookmark-module> -->
			<component :is="currentModule" v-bind="currentProperties"></component>
			
		</div>
	</div>
</template>
<script>
	import MenuTitle from './Menu.vue';
	import todoModule from './ToDo.vue';
	import bookmarkModule from './BookmarkModule.vue';
	import weatherModule from './WeatherModule.vue';
	import datetimeModule from './DateTimeModule.vue';
	import searchInput from './SearchInput.vue';
	import rightItem from './RightItem.vue';
	import leftItem from './LeftItem.vue';
	import gitTopList from './GitTopList.vue';
	import notepadModule from './NotepadModule.vue';
	import rssNewsModule from './RssNewsModule.vue';




	export default{
		props:{
			bookmarks: [],
		},
		data: function() {
			return {
				menuTitles: ['Home', 'Bookmarks', 'GitHub', 'News'],
				bookmarksList: [],
				currentModule: 'rssNewsModule',
				// todoListArr: [
				// 	{
				// 		id: 1,
				// 		title:'Создать гамбургер(плавный переход + скрытие свайпом)'
				// 	},
				// 	{
				// 		id: 2,
				// 		title: 'Дороботать кнопку Номе(изменить расположение и стиль)'
				// 	}, 'Подключить базу даных', 'Разабраться в AJAX запросах к ДБ', 'Начать верстку шаблона для админки', 'Подсоединить админку(Разобраться с Аунтентификацией + Создать USER\'а с правами ROOT)', '[HomePage]Удаленипе и выполнение туду элементов', '[HomePage]Сохранение в ЛокалСторидж', '[HomePage] СДелать шапку с поиском и гамбургером']
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
			MenuTitle,
			bookmarkModule,
			todoModule,
			datetimeModule,
			weatherModule,
			searchInput,
			leftItem,
			rightItem,
			gitTopList,
			notepadModule,
			rssNewsModule,
		},
		
		methods: {
			toggleMenu: function(){
				this.isHidden = !this.isHidden
			
			},
			getResult: function(resultArray){
				this.bookmarksList = resultArray 
			},
			setModule: function(moduleName){
				this.currentModule = moduleName
			}
		}
	}

</script>
