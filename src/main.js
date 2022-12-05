import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowsRotate, faTruck, faHouse, faSuitcase, faUsers, faGlobe, faGear,
} from '@fortawesome/free-solid-svg-icons';
import { faBuilding as faRegularBuilding, faLightbulb as faRegularLightbulb } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';

// eslint-disable-next-line max-len
library.add(faArrowsRotate, faRegularBuilding, faTruck, faHouse, faSuitcase, faUsers, faUsers, faGlobe);
library.add(faRegularLightbulb, faGear);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
