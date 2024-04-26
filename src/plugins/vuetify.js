/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const lightTheme =  {
  dark: false,
  colors: {},
  variables: {}
}

const darkTheme =  {
  dark: true,
  colors: {},
  variables: {}
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      lightTheme,
      darkTheme
    }
  },
})
