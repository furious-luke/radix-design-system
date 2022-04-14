import {styled} from '../stitches.config'

export const VisibleAt = styled('div', {
  display: 'none',
  variants: {
    showAt: {
      initial: {
        display: 'initial',
      },
      bp1: {
        '@bp1': {
          display: 'initial',
        },
      },
      bp2: {
        '@bp2': {
          display: 'initial',
        },
      },
      bp3: {
        '@bp3': {
          display: 'initial',
        },
      },
      bp4: {
        '@bp4': {
          display: 'initial',
        },
      },
    },
    hideAt: {
      initial: {
        display: 'none !important',
      },
      bp1: {
        '@bp1': {
          display: 'none !important',
        },
      },
      bp2: {
        '@bp2': {
          display: 'none !important',
        },
      },
      bp3: {
        '@bp3': {
          display: 'none !important',
        },
      },
      bp4: {
        '@bp4': {
          display: 'none !important',
        },
      },
    },
  },
})
