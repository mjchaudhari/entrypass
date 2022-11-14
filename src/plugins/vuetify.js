import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

Vue.use(Vuetify)
const opts = {
  icons: {
    iconfont: 'md'
  },
  theme: {
    light: true,
    options: { customProperties: true },
    themes: {
      light: {
        primary: '#F38484',
        secondary: '#D2D2D4',
        tertiary: '#115D98',
        accent: '#FFDB00',
        error: '#c36b6d',
        info: '#115C96',
        success: '#6bc395',
        warning: '#cdafa2',
        dark: '#564C55',
        grey: '#E8E8E8',
        disabled: '#B7C2C7',
        white: '#ffffff',
        accentDisabled: '#FCF1AF',
        background: '#fffffe',
        text: '#F38484'
      }
    }
  }
}
export default new Vuetify(opts)
