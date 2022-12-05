import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowsRotate, faTruck, faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBuilding as faRegularBuilding } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';

library.add(faArrowsRotate, faRegularBuilding, faTruck, faHouse);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
