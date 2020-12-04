import Vue from 'vue'

const componentContext = require.context('./', true, /index\.js$/)

componentContext.keys().forEach(component => {
  if (component.startsWith('./index')) {
    return
  }
  const componentConfig = componentContext(component)
  const ctrl = componentConfig.default || componentConfig
  Vue.component(ctrl.name, ctrl)
})
