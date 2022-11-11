// Import our custom CSS
// import '../src/scss/custom.scss';
import '../src/scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

import 'regenerator-runtime';
import './script/component/title-bar.js';
import './script/component/hero-image.js';
import './script/component/search-tools.js';
import './script/component/filter-tools.js';
// import './script/component/movies.js';
import main from "./script/view/main.js";


document.addEventListener("DOMContentLoaded", main);