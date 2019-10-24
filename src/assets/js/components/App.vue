<template>
	<div class="container">
		<home-page></home-page>
		<button v-on:click="getBookmarks">Hell</button>
		<ul>
			<tree-item v-for="node in bookmarks" :nodes="node.children" :title="node.title" :url="node.url"></tree-item>
		</ul>
	</div>
	
</template>

<script>
	import treeItem from './TreeTemplate.vue';
	import homePage from './HomePage.vue';

	export default {
		props: ['nodes', 'title', 'url'],
		data: function() {
			return {
				bookmarks: null
			}
		},
		components: {
			treeItem,
			homePage
		},
		methods: {
			getBookmarks: function() {
				var that = this
				chrome.bookmarks.getTree(
					function(bookmarkTreeNodes){
				
						that.bookmarks = bookmarkTreeNodes[0].children[0].children
				})
			}
		}
	}
</script>

<style scoped>
	p {
		font-size: 20px;
	}
</style>