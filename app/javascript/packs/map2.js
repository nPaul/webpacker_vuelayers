
import Vue from 'vue/dist/vue.esm'
import VueLayers from 'vuelayers'
import TpMap from '../map.vue'
import 'vuelayers/lib/style.css'
Vue.use(VueLayers)

import TurbolinksAdapter from 'vue-turbolinks';
document.addEventListener('turbolinks:load', () => {
	var element = document.getElementById("map2")
	if (element != null) {
		const app = new Vue({
			el: '#map2',
			components: { TpMap  },
			template: '<TpMap />'
		})
	}
})
