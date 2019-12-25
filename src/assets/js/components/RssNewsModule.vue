<template>
	<div class="rss-new">
		<nav class="left-panel">
			<h2>This is Navigation</h2>
			<a @click = "changeSite" id="tproger">TProger</a>
			<a @click = "changeSite" id="proglib">ProgLib</a>
		</nav>
		<div class="rss-content">
			<h3>Content</h3>
			<tree-item v-for="node in rssNew" :key="node.id" :nodes="node" :title="node.title" :url="node.link"></tree-item>
		</div>
	</div>
</template>
<script>
import treeItem from './TreeTemplate.vue';

export default {
	name: 'RssNewsModule',
	props: ['nodes', 'title', 'url', 'rssNew'],
	data () {
		return {
			rssNew: '',
			currentSite: 'tproger',
			sites: {
				'tproger': 'https://tproger.ru/feed/', 
				'proglib': 'https://proglib.io/feed',
			},
		}
	},
	components: {
		treeItem,
	},
	watch: {
		currentSite: function(){
			this.getJson()
		}
	},
	methods: {
		getJson () {
			const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

			let rssParser = require('rss-parser');
			let parser = new rssParser()
		 	let that = this
			parser.parseURL(CORS_PROXY + this.sites[this.currentSite], function(err, feed) {
				if (err) throw err;
				that.rssNew = feed.items
				console.log(feed)
				// feed.items.forEach(function(entry) {
				// 	that.rssNew = that.rssNew + entry.title + ':' + entry.link;
				// })
			})
		},
		changeSite (e){
			console.log(this.sites[this.currentSite], this.currentSite)
			this.currentSite = e.target.id
		},

	},

	beforeMount (){
		this.getJson()
	}
}
</script>
<style lang="css" scoped>
</style>