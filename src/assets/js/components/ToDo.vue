
<template>
	<div class="todo-module" >
		<h2>TODO</h2>
		<ul v-show="todoList.length">
			<li v-for="todo in todoList" 
				:key="todo.id"
				:class="{completed: todo.completed}">
				<input type="checkbox" name="checkbox" @change="isChecked(todo)" class="checkbox"><span class="custom-checkbox"></span>
				<label>{{todo.title}}</label>
				<button class="delete" @click="removeTodo(todo)">x</button></li>
		</ul>
		<input type="text" v-model="item" @keyup.enter="addTodo" class="todo-input" autocomplete="false" placeholder="Add your todo">
	</div>
</template>
<script >
	var LOCALSTORAGE_KEY = 'todo-module'

	var todoStorage = {
		fetch: function(){
			var todos = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || '[]')

			todos.forEach(function(todo, index){
				todo.id = index
			})
			todoStorage.uid = todos.length

			return todos
		},
		save: function(todos){
			localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(todos))
		}

	}

	export default {
		name: 'todo',
		data: function(){
			return {
				item: '',
				todoList: todoStorage.fetch()
			}
			
		},
		watch: {
			todoList: {
				handler: function (todoList) {
					todoStorage.save(todoList)
				},
				deep: true
			}
		},



		methods: {
			addTodo: function(){
				this.todoList = todoStorage.fetch(),

				this.todoList.push({
					id: todoStorage.uid++,
					title: this.item,
					completed: false

				})

				//todoStorage.save(this.todoList)
				
				this.item = ''
			},

			removeTodo: function(todo){
				this.todoList.splice(this.todoList.indexOf(todo), 1)
				//todoStorage.save(this.todoList)
			},

			isChecked: function(todo){
				todo.completed = !todo.completed 
			}
		},
		
	};
</script>
<style scoped>
	span{
		color:#881111;
	}
</style>