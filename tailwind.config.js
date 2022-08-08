const lineClamp = require('@tailwindcss/line-clamp')

module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
        DEFAULT: '2rem',
        sm: '2rem'
      },
      },
      colors:{
        primary:{
          DEFAULT:'#1E4243',
        },
        secondary:'#ffffff',
        lightpink:'#F5E2DE',
      },
      lineClamp:{
        7: '7',
      }
    },
  },
  variants: {
    extends: {
      lineClamp: ["hover"],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
