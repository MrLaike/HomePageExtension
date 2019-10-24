
<template>
	<li>
		<a :href="url">{{ !(title) ? url : title }}</a>
		<ul>
			<tree v-if="nodes" v-for="node in nodes" :title="node.title" :nodes="node.children" :url="node.url"></tree>
		</ul>
	</li>
</template>
<script >
	export default {
		name: 'tree',
		props:['nodes', 'title', 'url'],
		data: function() {
			return {
				message: 'HELLO'
			}
		}
	};
</script>
<style scoped>
	li {
		color:red;
	}
</style>