import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from '~/locales/en.js';
import fr from '~/locales/fr.js';

Vue.use(VueI18n);

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      'en': en,
      'fr': fr,
    }
  });

  // CR: we aren't implementing langcodes in the URL so this is commented out.
  //
  // app.i18n.path = (link) => {
  //   if (app.i18n.locale === app.i18n.fallbackLocale) {
  //     return `/${link}`;
  //   }
  //   return `/${app.i18n.locale}/${link}`;
  // }
}
