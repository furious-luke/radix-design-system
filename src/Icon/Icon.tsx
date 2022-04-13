import {styled} from '../stitches.config'

export const Icon = styled('span', {
  display: 'inline-block',
  lineHeight: 1,
  '& > *:first-child': {
    width: '100%',
    height: '100%',
  },
  variants: {
    size: {
      '1': {
        width: '$3',
        height: '$3',
      },
      '2': {
        width: '$5',
        height: '$5',
      },
      '3': {
        width: '$6',
        height: '$6',
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
})
