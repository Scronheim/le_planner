/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark'
  },
  defaults: {
    VList: {
      density: 'compact',
    },
    VTextField: {
      density: 'compact',
      variant: 'outlined',
      hideDetails: true,
    },
    VSelect: {
      density: 'compact',
      variant: 'outlined',
      hideDetails: true,
    },
    VAutocomplete: {
      density: 'compact',
      variant: 'outlined',
      hideDetails: true,
    },
    VTable: {
      density: 'compact',
    },
    VBtn: {
      variant: 'text'
    }
  }
})
