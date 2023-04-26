import { createApp } from 'vue';
import './assets/scss/style.scss';
import App from './App.vue';
import { FontAwesomeIcon } from '../node_modules/@fortawesome/vue-fontawesome';

/* FontAwesomeIcons */
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faTwitter, faBehance, faInstagram, faDribbble, faLinkedin, faGithub, faPinterest)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
