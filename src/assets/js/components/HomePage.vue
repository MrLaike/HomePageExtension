<template>
	<div class="wrapper">
		<nav class="nav">
			<ul class="menu">
				<menu-title v-for="title in menuTitles" :titles="title"></menu-title>	
			</ul>
		</nav>
		<div class="main">
			<todo></todo>
		</div>
	</div>
</template>
<script>
	import MenuTitle from './Menu.vue';
	import todo from './ToDo.vue';

	export default{
		data: function() {
			return {
				menuTitles: ['Home', 'Bookmarks', 'News'],

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
			todo
		},
		methods: {

		}
	}

</script>
<style scoped></style>
