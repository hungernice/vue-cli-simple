<template>
	<div id="Date">
		<el-date-picker
	      	v-model="value1"
	      	type="date"
		    placeholder="选择日期"
		    :picker-options ='ranger'
		    >
		</el-date-picker>
  
	</div>
</template>

<script>
	var dates =new Date()
	var y =dates.getFullYear()
	var m =dates.getMonth() + 1
	var d =dates.getDate()
	var localDay =y+"-"+m+"-"+d
	export default {
		data(){
			return {
				value1: localDay,
				ranger: {
					disabledDate(time) {
	        			return time.getTime() < Date.now() - 8.64e7
					}
				}
			}
		}
	}	
</script>

<style>
</style>