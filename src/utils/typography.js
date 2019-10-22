import Typography from 'typography'

import 'normalize.css'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Oswald',
      styles: ['700'],
    },
  ],
  headerFontFamily: ['Oswald', 'sans-serif'],
  bodyFontFamily: ['Avenir', 'sans-serif'],
})

export default typography
