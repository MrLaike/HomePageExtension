<template>
	<div class="wrapper">
		<nav class="nav">
			<ul class="menu" :class="{hidden: isHidden}">
				<menu-title v-for="title in menuTitles" :titles="title"></menu-title>	
			</ul>
			<div class="hamburger" @click="toggleMenu()">
				<a href="#" class="hamburger__line"></a>
			</div>
		</nav>
		<div class="main">
			<!-- <datetime-module></datetime-module>
			<weather-module></weather-module>

			<p class="today">Today: Read day</p>
			 -->
			<!-- <todo-module></todo-module> -->
			<bookmark-module></bookmark-module>
		</div>
	</div>
</template>
<script>
	import MenuTitle from './Menu.vue';
	import todoModule from './ToDo.vue';
	import bookmarkModule from './BookmarkModule.vue';
	import weatherModule from './WeatherModule.vue';
	import datetimeModule from './DateTimeModule.vue';

	export default{
		data: function() {
			return {
				menuTitles: ['Home', 'Bookmarks', 'GitHub', 'News'],
				isHidden: true,

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
		components: {
			MenuTitle,
			bookmarkModule,
			todoModule,
			datetimeModule,
			weatherModule
		},
		methods: {
			toggleMenu: function(){
				this.isHidden = !this.isHidden
			
			}

		}
	}

</script>
<style scoped></style>
