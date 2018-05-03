<template>
	<div class="head-con">
		<div class="head-cen">
			<div class="head-img">
				<img src="./../assets/header.jpg" alt="图片加载失败">
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name:"hd"
	}
</script>
<style>
	.head-con{
		width: 100%;
	}
	.head-cen{
		width: 1200px;
		margin: 0 auto;
	}
	.head-img{
		width: 50px;
		height: 50px;
	}
	.head-img>img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
</style>