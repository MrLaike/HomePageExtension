<template>
	<div class="bookmark">
		<ul class="list-wrapper">
			<tree-item v-for="node in bookmarks" :nodes="node.children" :title="node.title" :url="node.url"></tree-item>
		</ul>
	</div>
</template>

<script>
	import treeItem from './TreeTemplate.vue';

	export default{
		props: ['nodes', 'title', 'url', 'bookmarks'],
		data: function() {
			return {
				
			}
		},
		components: {
			treeItem,
		},
		methods: {
			
		}
	}

</script>
