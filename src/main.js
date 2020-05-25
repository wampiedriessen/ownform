import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import globallyRegisterComponents from './register.js'

Vue.config.productionTip = false

const ownformComponents = require.context('./components/ownform-components', false, /Ownform[A-Z]\w+\.vue$/);
const propertyBuilders = require.context('./components/property-builders', false, /PropertiesOf[A-Z]\w+\Builder.vue$/);

globallyRegisterComponents(ownformComponents)
globallyRegisterComponents(propertyBuilders)

new Vue({
  render: h => h(App),
}).$mount('#app')
