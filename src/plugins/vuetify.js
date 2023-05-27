import { createApp } from 'vue';
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css';

const app = createApp();
const vuetify = new Vuetify();

app.use(vuetify);

export default vuetify;