import {styled} from '../stitches.config'

export const Section = styled('article', {
  overflow: 'clip',
  padding: '$2',
  '@bp1': {
    padding: '$3',
  },
  '@bp2': {
    padding: '$4',
  },
})
