import {createVuetify} from "vuetify";
import { fa } from "vuetify/locale";

  // check https://vuetify-nuxt-module.netlify.app/guide/nuxt-runtime-hooks.html
  export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
      // ... your configuration
      theme: {
        defaultTheme: 'myCustomTheme',
        themes: {
          myCustomTheme: {
            dark: false, // Set to true if you want a dark theme
            colors: {
              background: '#E5E1DA',
            },
          },
        },
      },
      locale: {
        locale: "fa",
        messages: { fa },
        rtl: {
          fa: true,
        },
      },
      styles: {
        configFile: "app/assets/settings.scss",
      },

    })
    app.vueApp.use(vuetify)
  })
