import {globalCss} from './stitches.config'

export const resetCss = globalCss({
  html: {
    padding: 0,
    margin: 0,
  },
  body: {
    height: '100vh',
    padding: 0,
    margin: 0,
  },
  '*': {
    boxSizing: 'border-box',
  },
})
