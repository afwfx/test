<template>
	<div>
		<ul>
			<li><p>{{ '姓名：' + person.name }}</p></li>
			<li><p>{{ '性别：' + person.genfer }}</p></li>
			<li><p>{{ '年龄：' + person.age }}</p></li>
			<li><p>{{ '爱好：' + person.hobbie }}</p></li>
		</ul>
		<input type="button" value="修改" v-on:click="$emit('callback','pass')" />
	</div>
</template>

<script>
	export default {
		name: 'child',
		props: {
			person: Object,
			callback: Function,
		}
	}
</script>

<style>
</style>
