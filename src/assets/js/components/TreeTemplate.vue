
<template>
	<li class="list-item" :class="{block: isBlock, column: isColumn}">
		<a @click="toggle"  :class="{folder: isFolder}" :href="url">{{ !(title) ? url : title }}<span v-show="isFolder">{{isOpen ? "[-]" : "[+]"}}</span></a>
		
		<ul v-if="isFolder" v-show="isOpen">
			<tree v-for="node in nodes" :key="node.id" :title="node.title" :nodes="node.children" :url="node.url"></tree>
		</ul>
	</li>
</template>
<script >
	export default {
		name: 'tree',
		props:['nodes', 'title', 'url', 'style'],
		data: function() {
			return {
				isColumn: this.style ? true : false,
				isBlock: this.style ? false : true
			}
		},
		computed:{
			isFolder: function(){
				if(this.nodes != undefined){
					return this.nodes.length && this.nodes.length > 0
				}
				// return !!this.nodes.length
			}
		},
		methods:{
			toggle: function(){
				this.isOpen = !this.isOpen
			}
		}
	};
</script>
<style scoped>
	li {
		color:red;
	}
</style>
