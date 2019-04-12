<template>
	<div class="renew">续约</div>
</template>

<script type="text/ecmascript-6">
	import {goodsHotSales} from '../../config/interface.js'
	export default{
		data(){
			return{
				clientWidth:this.$store.state.clientWidth
			}
		},
		mounted(){
			console.log(this.clientWidth)
			this.init()
		},
		methods:{
			init(){
				const url=goodsHotSales;
				let params={
					userId:1
				}
				fetch(url,params)
				.then((res)=>{
					if(res.code==10000){

					}
				})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
	.renew{
		@include wh(200px,200px);
		border:1px solid #ccc;
	}
</style>