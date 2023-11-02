import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import colors from "vuetify/lib/util/colors";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: colors.teal.darken3,
            accent: colors.grey.lighten3,
            secondary: colors.deepOrange.darken2,
            info: colors.teal.lighten1,
            warning: colors.amber.base,
            error: colors.deepOrange.accent4,
            success: colors.green.accent3,
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
