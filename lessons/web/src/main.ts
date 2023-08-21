import { createApp } from 'vue'
import { naive } from './addons/naive-components/naive-components';

/* Global components & their props */
import { globalComponents } from './addons/globalComponents';
import { propsToClasses } from './addons/custom-props/propsToClasses';

/* control console log */
import { customLog } from './addons/global/helpers/customConsoleLog';

import _ from 'lodash';

window._ = _;


window.console.log = customLog;


/* App & global components*/
import App from './App.vue';
let app = createApp(App);

for (let key in globalComponents) {
    app.component(key, globalComponents[key]);
}

app.use(propsToClasses);
app.use(naive);

app.mount('.study-ui-container')


