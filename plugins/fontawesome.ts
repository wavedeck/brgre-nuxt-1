import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Import icons
import {
  faPhone,
  faEnvelope,
  faBars,
  faMagnifyingGlass,
  faHouse,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { faLinkedin, faFacebook, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";

library.add(faPhone, faEnvelope, faBars, faMagnifyingGlass, faHouse, faXmark, faLinkedin, faFacebook, faInstagram, faTiktok, faYoutube);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
