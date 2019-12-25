<template>
		<div class="search">
			<select name="search-type" v-model="searchType">
				<option value="web">Web</option>
				<option value="bookmarks">Bookmarks</option>
			</select>
			<input class="search-input" type="text" v-model="searchText" @keyup.enter="runSearch" placeholder="Enter what you want find">
		</div>
</template>

<script>
	import Fuse from 'fuse.js';

	export default {
		data (){
			return {
				results: [],
				searchText: "",
				searchType: "bookmarks"
			}
		},

		created (){
			this.debounceRunSearch = _.debounce(this.bookmarkSearch, 400)
		},
		watch: {
			// searchText: function(){
			// 	this.bookmarkSearch()
			// }
		},
		methods: {
			getBookmarks () {
				let that = this
				chrome.bookmarks.getTree(
					function(bookmarkTreeNodes){
						that.bookmarks = bookmarkTreeNodes[0].children[0].children
				})
			},
			runSearch () {

				switch(this.searchType){
					case "bookmarks": 
						this.bookmarkSearch()
						break;
					case "web": 
						this.webSearch()
						break;
				}

			},
			webSearch (){
				let duckduckgo = "duckduckgo.com/?q="
				let google = "google.com/search?q="
				document.location.href = "https://"+google+this.searchText
			},
			bookmarkSearch (){
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
				this.$emit('get-result', this.results)
				this.$emit('change-module', 'bookmarkModule')
			}
		},
		beforeMount (){
			this.getBookmarks()
		}
	}
</script>
