import { createAxios } from 'rich-axios';
import shipping from './shipping'

const configs = {
  shipping
}

const instance = createAxios({
  timeout: 5000
});

let modules = {};
const moduleNames = Object.keys(configs);
let length = moduleNames.length;
while(length--) {
  const moduleName = moduleNames[length]
  const moduleApis = configs[moduleName]
  if (Array.isArray(moduleApis) && moduleApis.length > 0) {
    const res = moduleApis.reduce((apis, api) => {
      return Object.assign(apis, {
        [moduleName + '_' + api.name]: (obj, resetConfig) => 
        ['POST', 'CANCELPOST'].includes(config.type.toUpperCase()) 
          ? instance[config.type](config.path, obj, resetConfig)
          : instance[config.type](config.path, obj)
      })
    }, {})
    Object.assign(modules, res)
  }
}

export default modules