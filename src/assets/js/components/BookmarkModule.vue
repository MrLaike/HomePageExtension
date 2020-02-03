<template>
	<div class="bookmark">
		<div class="filter">
			<div class="sorting">
				<p>Sort by: </p>
				<select>
					<option value="date">date</option>
					<option value="views">views</option>
					<option value="title">title</option>

				</select>
			</div>
			<div class="hash-tag">
				<a class="tags active" href="#php">#php</a>
				<a class="tags" href="#js">#js</a>
				<a class="tags" href="#ai">#ai</a>
			</div>
		</div>
		<ul class="list-wrapper">
			<tree-item v-for="node in bookmarks" :key="node.id" :nodes="node.children" :title="node.title" :url="node.url"></tree-item>
		</ul>
	</div>
</template>

<script>
	import treeItem from './TreeTemplate.vue';

	export default{
		props: ['nodes', 'title', 'url', 'bookmarks'],
		data: function() {
			return {
				bookmarks: "",
			}
		},
		computed:{
			getBookmarks() {
				let that = this
				chrome.bookmarks.getTree(
					function(bookmarkTreeNodes){
						that.bookmarks = bookmarkTreeNodes[0].children[0].children
				})
			},
		},
		components: {
			treeItem,
		},
		methods: {
			
		},
		beforeMount() {
			this.getBookmarks
		}
	}

</script>
