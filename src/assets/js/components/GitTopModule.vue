<template>
	<div class="git-top">
		<select name="language" v-model="language">
			<option value="php">PHP</option>
			<option value="javascript">JavaScript</option>
			<option value="python">Python</option>
			<option value="sql">SQL</option>
			<option value="rust">Rust</option>
			<option value="java">Java</option>

		</select>
		<div class="git-list">
			<git-list v-for="item in topList" :key="item.id" :name="item.name" :desc="item.description" :url="item.url" :lang="item.language" :stars="item.stars" :forks="item.forks"></git-list>
		</div>
	</div>

</template>



<script>
	import {
		languages,
		fetchRepositories,
		fetchDevelopers,
	} from '@huchenme/github-trending';

	import gitList from './GitList.vue';

	export default {
		props: ['name', 'desc', 'url', 'lang', 'stars', 'forks'],
		data: function() {
			return {
				topList: '',
				language: 'php',
			}
		},
		components:{
			gitList,
		},
		methods: {
			getTopList: function(){
				let that = this
				fetchRepositories({language: that.language, since: 'daily'}).then(repositories => {
					that.topList = repositories
				})
			},

		},
		watch:{
			language: function(){
				this.getTopList()
			}
		},
		beforeMount() {
			this.getTopList()
		}


	}

</script>
