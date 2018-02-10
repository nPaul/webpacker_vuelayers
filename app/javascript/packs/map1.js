import Vue from 'vue'
import VueLayers from 'vuelayers'
import TpMap from '../map.vue'
import 'vuelayers/lib/style.css'
Vue.use(VueLayers)

import TurbolinksAdapter from 'vue-turbolinks';
document.addEventListener('turbolinks:load', () => {
	var element = document.getElementById("map1")
	if (element != null) {
		const app = new Vue({
			el: '#map1',
			render: h => h(TpMap)
		})
	}
})
