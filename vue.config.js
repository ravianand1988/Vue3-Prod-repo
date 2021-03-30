module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
const pjson = require('./package.json')
process.env.VUE_APP_VERSION = process.env.VERSION || pjson.version
process.env.VUE_APP_BUILD_NUM = process.env.BUILD_NUM || pjson.buildNum
