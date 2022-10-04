import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import * as VueGoogleMaps from "vue2-google-maps"

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyA7-hEfL1yYS2oN42TxFkqn2ZxSEmOyXvk",
    libraries: "places"
  }
});
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
