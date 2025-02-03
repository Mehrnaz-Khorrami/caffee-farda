import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'
import {fa} from "vuetify/locale";

export default defineVuetifyConfiguration({
  // your Vuetify options here
  theme: {
    defaultTheme: 'fardaCaffee',
    themes: {
      fardaCaffee: {
        dark: false,
      }
    }
  },
  locale:{
    locale: "fa",
    messages: {fa},
    rtl: {
      fa: true,
    }
  }
})