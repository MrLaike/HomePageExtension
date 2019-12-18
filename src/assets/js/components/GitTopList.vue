<template>
	<div>
		Top List:
		{{topList}}

	</div>

</template>

<script>
	import {
		languages,
		fetchRepositories,
		fetchDevelopers,
	} from '@huchenme/github-trending';
	export default {

		data: function() {
			return {
				topList: this.getTopList(),
			}
		},

		methods: {
			getTopList: function(){
				let that = this
				fetchRepositories({language: 'php', since: 'daily'}).then(repositories => {
					that.topList = repositories
				})
			},

		}


	}

</script>
