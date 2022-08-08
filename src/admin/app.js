import logo from './extensions/logovalecreative.png';

export default {
  config: {
    menu: {
      logo: logo
    },
    auth: {
      logo: logo
    },
    head: {
      favicon: logo,
    },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ]
  },
  bootstrap(app) {
    console.log(app);
  },
};
