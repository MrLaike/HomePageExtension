<template>
	<div class="git-list__item">
		<div class="item__header">
			<a :href="url"> {{ name }} </a>
		</div>
		<div class="item__body">
			<p> {{ desc }} </p>
		</div>
		<div class="item__footer">
			<p> language: {{ lang }} </p>
			<div class="item__left">
				<span> <i class="fas fa-star icon"></i>{{ stars }} </span>
				<span> <i class="fas fa-code-branch icon"></i>{{ forks }} </span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'GitList',
	props: ['name', 'desc', 'url', 'lang', 'stars', 'forks'],
	data () {
		return {
		}
	}
}
</script>