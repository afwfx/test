<template>
	<div>
		<h6>there has some examples</h6>
		<div>
			<p>this is parent component</p>
			<Child :person='person' @callback='isPass'></Child>
			<h5 v-show="person.pass">Pass</h5>
		</div>
		<VuexDemo></VuexDemo>
	</div>
</template>

<script>
	import Child from './child'
	import VuexDemo from '@/components/vuexDemo.vue'
	export default {
		name: 'Example',
		components:{
			Child,VuexDemo,
		},
		data() {
			return {
				person:{
					pass: false,
					name: 'Cai',
					gender: 'famale',
					age:23,
					hobbie: ['唱歌','跳舞','Rap','篮球'],
				}
			}
		},
		methods:{
			isPass: function(){
				this.person.pass = !this.person.pass
			}
		}
	}
</script>

<style>
</style>
