import './assets/main.css'
import { createApp } from 'vue'
import { createStore } from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import App from './App.vue'
import router from './router'

library.add(fas,fab,far)

const store = createStore({
     state(){
          return{
            counter: 0
          };
     }
})
const app = createApp(App)
app.use(store);
app.use(router);

app
.component('fa',FontAwesomeIcon) 
.mount('#app')
