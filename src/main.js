import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faArrowsRotate, faTruck, faHouse, faSuitcase, faUsers, faGlobe, faGear, faPhone, faEnvelope,
  faMagnifyingGlass, faLink,
} from '@fortawesome/free-solid-svg-icons';

import { faBuilding as faRegularBuilding, faLightbulb as faRegularLightbulb, faClock as faRegularClock } from '@fortawesome/free-regular-svg-icons';

import {
  faFacebook, faTwitter, faYoutube, faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';

// eslint-disable-next-line max-len
library.add(faArrowsRotate, faRegularBuilding, faTruck, faHouse, faSuitcase, faUsers, faUsers, faGlobe);
library.add(faRegularLightbulb, faGear, faPhone, faEnvelope, faRegularClock, faMagnifyingGlass);
library.add(faFacebook, faTwitter, faYoutube, faInstagram, faLink);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
