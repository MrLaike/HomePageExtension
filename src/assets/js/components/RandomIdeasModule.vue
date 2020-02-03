<template>
	<div class="random-idea">
		<p>U can: <span>{{ idea}}</span></p>
	</div>

</template>
<script>
export default {
	name: 'RandomIdeasModule',
	data () {
		return {
			idea: '',
			ideaList:["Read book", "Coding", "Walking", "Drawing", "Anything"],
		}
	},
	methods: {
		getRandomIdea(){
			this.idea = this.ideaList[Math.round(Math.random() * 10)%this.ideaList.length]
			
		}
	},
	mounted(){
		this.getRandomIdea()
	}
}
</script>