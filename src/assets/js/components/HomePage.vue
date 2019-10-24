<template>
	<div class="wrapper">
		<nav class="nav">
			<ul class="menu">
				<menu-title v-for="title in menuTitles" :titles="title"></menu-title>	
			</ul>
		</nav>
		<div class="main">
			<todo :todoList="todoListArr"></todo>
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
				todoListArr: ['Создать гамбургер(плавный переход + скрытие свайпом)', 'Дороботать кнопку Номе(изменить расположение и стиль)', 'Подключить базу даных', 'Разабраться в AJAX запросах к ДБ', 'Начать верстку шаблона для админки', 'Подсоединить админку(Разобраться с Аунтентификацией + Создать USER\'а с правами ROOT)']
			}
		},
		components: {
			MenuTitle,
			todo
		},
		methods: {}
	}

</script>
<style scoped></style>
