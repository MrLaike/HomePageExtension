
<template>
	<div class="todo">
		<ul>
			<h2>TODO</h2>
			<li v-if="todoList" v-for="listItem in todoList" :item="listItem"><span class="checkbox"></span>{{listItem}}<span class="delete">x</span></li>
		</ul>
		<input type="text" v-model="item" @keyup.enter="addItem" class="todo-input" autocomplete="false" placeholder="Add your todo">
	</div>
</template>
<script >
	export default {
		name: 'todo',
		props:['todoList'],
		data: {
			item: ''
		},
		methods:{
			addItem: function(){
				this.todoList.unshift(this.item)
				this.item = ''
			}

		}
	};
</script>
<style scoped>
	span{
		color:#881111;
	}
</style>