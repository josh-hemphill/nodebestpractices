
new Vue({
	el: '#nav',
	data: () => {
		return { 
			msg: 'Vue' 
		}
	},
	created: () => {
		window.$NBP = (hook,vm) => {
			console.log(vm)
		}
	}
})
