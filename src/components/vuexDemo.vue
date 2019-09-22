<template>
	<div>
		<input type="text" v-model="num" />
		<em>计数：{{ count }}</em>&nbsp;&nbsp;
		<input type="button" value="加" @click="addCount" />
		&nbsp;&nbsp;
		<input type="button" value="相加" @click="add" />
		&nbsp;&nbsp;
		<input type="button" value="加10" @click="plus" />
		<br/>
		<span>Action:</span>
		<input type="button" value="加10" @click="addAction" />
		<p>todos.length: {{ todosLength }}</p>
		<p>{{ todos }}</p>
		<p>{{ getTodoById }}</p>
	</div>
</template>

<script>
	import store from './store.js'
	export default{
		name: 'vuexDemo',
		data() {
			return {
				num:0
			}
		},
		computed: {
			count() {
				return this.$store.state.count
			},
			todos() {
				return this.$store.getters.doneTodos
			},
			todosLength() {
				return this.$store.getters.doneTodosCount
			},
			getTodoById() {
				return store.getters.getTodoById(2)
			}
		},
		methods: {
			addCount: function(){
				this.$store.commit('increment')
			},
			add: function(){
				this.$store.commit('add',Number(this.num))
			},
			plus: function() {
				// this.$store.commit('plus', {
				// 	amount:10
				// })
				this.$store.commit({
					type: 'plus',
					amount: 10
				})
			},
			addAction: function() {
				this.$store.dispatch({
					type: 'incrementAsync',
					amount: 10
				})
			}
		}
	}
</script>

<style>
</style>
