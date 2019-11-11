<template>
	<div class="bookmark">
		<input class="bookmark-search" type="text" v-model="searchText" @change="runSearch" placeholder="Enter what you want find">
		<a @click="changeBlockStyle" class="block-style">{{ blockStyleToggle ? "■" : "+" }}</a>
		<ul class="list-wrapper" :class=[blockStyle]>
			<tree-item v-for="node in results" :style="blockStyle" :nodes="node.children" :title="node.title" :url="node.url"></tree-item>
		</ul>
	</div>
</template>

<script>
	import treeItem from './TreeTemplate.vue';
	import Fuse from 'fuse.js';

	export default{
		props: ['nodes', 'title', 'url'],
		data: function() {
			return {
				bookmarks: this.getBookmarks(),
				results: [],
				searchText: "",
				blockStyleChar: "■",
				blockStyle: "column",
				blockStyleToggle: 0
			}
		},
		components: {
			treeItem,
		},
		created: function(){
			this.debounceRunSearch = _.debounce(this.runSearch, 400)
		},
		watch: {
			searchText: function(){
				this.runSearch()
			}
		},
		methods: {
			getBookmarks: function() {
				let that = this
				chrome.bookmarks.getTree(
					function(bookmarkTreeNodes){
						that.bookmarks = bookmarkTreeNodes[0].children[0].children
				})
			},
			runSearch: function() {
				var options = {
					shouldSort: true,
					tokenize: true,
					matchAllTokens: true,
					threshold: 0.2,
					location: 0,
					distance: 100,
					maxPatternLength: 32,
					minMatchCharLength: 1,
					keys: [
						"title",
						"url"
					]
				}
				var fuse = new Fuse(this.bookmarks, options)
				if(!this.searchText){
					this.results = [] //this.bookmarks
				}else{
					this.results = fuse.search(this.searchText)
				}
			},
			changeBlockStyle: function(){
				this.blockStyle = !this.blockStyleToggle ? "block" : "column"
				return this.blockStyleToggle = !this.blockStyleToggle
			}
		}
	}

</script>
