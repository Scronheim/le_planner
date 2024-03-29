/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: {
      ts: '@typescript-eslint/parser',
      '<template>': 'espree'
    }
  },
  'extends': [
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/base',
    'plugin:vuetify/base',
    'eslint:recommended'
  ],
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    semi: ['error', 'never'],
    indent: [
      'warn',
      2
    ],
    quotes: [
      'error',
      'single'
    ],
    'vue/html-quotes': [
      'error',
      'double',
      {
        avoidEscape: false
      }
    ],
    'vue/no-mutating-props': [
      'off'
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 2
        },
        multiline: {
          max: 1
        }
      }
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'CONDITIONALS',
          'DEFINITION',
          'LIST_RENDERING',
          [
            'UNIQUE',
            'SLOT'
          ],
          'OTHER_ATTR',
          'GLOBAL',
          'CONTENT',
          'RENDER_MODIFIERS',
          'OTHER_DIRECTIVES',
          'TWO_WAY_BINDING',
          'EVENTS'
        ],
        alphabetical: false
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          'void': 'never',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/html-indent': [
      'warn',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true
      }
    ],
    'vue/component-definition-name-casing': [
      'error',
      'PascalCase'
    ],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: [
          'vue'
        ],
        shouldMatchCase: false
      }
    ],
    'vue/no-dupe-keys': [
      'error',
      {
        groups: []
      }
    ],
    'vue/no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: false,
        skipTemplates: false,
        skipHTMLAttributeValues: false,
        skipHTMLTextContents: false
      }
    ],
    'switch-colon-spacing': 'error',
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'only-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    //    Включить если появится разница в переносах строк между Windows и Linux
    //    "linebreak-style": [
    //      "error",
    //      "unix"
    //    ],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'emits',
          [
            'components',
            'directives',
            'filters'
          ],
          'key',
          [
            'props',
            'propsData'
          ],
          'setup',
          'data',
          'computed',
          'methods',
          'watch',
          'parent',
          'functional',
          [
            'delimiters',
            'comments'
          ],
          'extends',
          'mixins',
          [
            'provide',
            'inject'
          ],
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          'asyncData',
          'fetch',
          'head',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          [
            'template',
            'render'
          ],
          'renderError'
        ]
      }
    ]
  }
}
