import { createStore } from 'vuex'

export default createStore({
	state: {
		loading: false
	  },
	  mutations: {
		setLoading (state,val) {
		  // 变更状态
		  state.loading = val
		}
	  }
})
