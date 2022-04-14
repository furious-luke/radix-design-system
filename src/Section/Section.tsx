import {styled} from '../stitches.config'

export const Section = styled('article', {
  overflow: 'clip',
  padding: '$1',
  '@bp1': {
    padding: '$2',
  },
  '@bp2': {
    padding: '$3',
  },
})
