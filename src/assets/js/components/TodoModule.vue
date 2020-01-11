
<template>
	<div class="todo-module" >
		<h2>TODO</h2>
		<div class="todo-panel">
			<div class="todo-board">
				<h3 class="title">Header 1</h3>
				<draggable class="list-group" tag="ul" v-model="list" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
					<transition-group type="transition" :name="'flip-list'">
						<li class="list-group-item" v-for="element in list" :key="element.order">
							<i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
							{{element.name}}
							<span class="badge">{{element.order}}</span>
						</li>
						<!-- <li v-for="todo in todoList" 
							:key="todo.id"
							:class="{completed: todo.completed}">
							<input type="checkbox" name="checkbox" @change="isChecked(todo)" class="checkbox"><span class="custom-checkbox"></span>
							<label>{{todo.title}}</label>
							<button class="delete" @click="removeTodo(todo)">x</button>
						</li> -->
					</transition-group>
				</draggable>
			</div>
			<div class="todo-board add-new-board">
				<h3 class="title">Add new board</h3>
				<span class="big-plus">+</span>
				<!-- Very Big Symbol Plus -->
				
			</div>
		</div>
		<!-- <input type="text" v-model="item" @keyup.enter="addTodo" class="todo-input" autocomplete="false" placeholder="Add your todo"> -->
	</div>
</template>
<script >
	import draggable from 'vuedraggable';
	const message = [
		"vue.draggable",
		"draggable",
		"component",
		"for",
		"vue.js 2.0",
		"based",
		"on",
		"Sortablejs"
	];

	var LOCALSTORAGE_KEY = 'todo-module'
	var todoStorage = {
		fetch() {
			var todos = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || '[]')
			todos.forEach(function(todo, index){
				todo.id = index
			})
			todoStorage.uid = todos.length
			return todos
		},
		save(todos) {
			localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(todos))
		},

		debug(v) {
			console.log(v)
		}
	}
	export default {
		name: 'todo',
		components: {
			draggable
		},
		data(){
			return {
				item: '',
				todoList: todoStorage.fetch(),
				list: message.map((name, index) => {
					return { name, order: index + 1, fixed: false };
				}),
				list2: [],
				list3: [],
				editable: true,
				isDragging: false,
				delayedDragging: false
			}
			
		},
		watch: {
			todoList: {
				handler(todoList) {
					todoStorage.save(todoList)
				},
				deep: true
			},
			isDragging(newValue) {
				if (newValue) {
					this.delayedDragging = true;
					return;
				}
				this.$nextTick(() => {
					this.delayedDragging = false;
				});
			}
		},
		computed: {
			dragOptions() {
				return {
					animation: 0,
					group: "description",
					disabled: !this.editable,
					ghostClass: "ghost"
				};
			},
		},
		methods: {
			addTodo() {
				this.todoList = todoStorage.fetch(),
				this.todoList.unshift({
					id: todoStorage.uid++,
					title: this.item,
					completed: false
				})
				//todoStorage.save(this.todoList)
				
				this.item = ''
			},
			removeTodo(todo) {
				this.todoList.splice(this.todoList.indexOf(todo), 1)
				//todoStorage.save(this.todoList)
			},
			isChecked(todo) {
				todo.completed = !todo.completed 
			},
			orderList() {
				this.list = this.list.sort((one, two) => {
					return one.order - two.order;
				});
			},
			onMove({ relatedContext, draggedContext }) {
				const relatedElement = relatedContext.element;
				const draggedElement = draggedContext.element;
				return (
				(!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
				);
				console.log(relatedContex, draggedContext);
			}
		},

	};
</script>