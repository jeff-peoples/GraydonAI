import { createAuth0 } from "@auth0/auth0-vue";
import { createApp } from "vue";
import App from "./app.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/css/styles.scss";


const app = createApp(App);

app
  .use(router)
  .use(
    createAuth0({
      domain: import.meta.env.VITE_AUTH0_DOMAIN,
      clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
      authorizationParams: {
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
      },
    })
  )
  .mount("#root");
