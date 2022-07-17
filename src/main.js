import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import apolloProvider from "./apollo";
//import VueApollo from "vue-apollo";

createApp(App).use(store).use(apolloProvider).use(router).mount("#app");
