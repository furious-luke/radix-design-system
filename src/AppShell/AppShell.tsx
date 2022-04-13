import {styled} from '../stitches.config'

const Span = styled('div', {
  gridColumn: '1/-1',
})

const BaseAppShell = styled('main', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  variants: {
    variant: {
      holyGrail: {
        '@bp2': {
          display: 'grid',
          gridTemplateColumns: '1fr 700px 1fr',
          gridTemplateRows: 'min-content 1fr min-content',
        },
      },
    },
    direction: {
      reverse: {
        flexDirection: 'column-reverse',
      },
    },
  },
  defaultVariants: {
    variant: 'holyGrail',
  },
})

type AppShell = typeof BaseAppShell & {Span: typeof Span}

export const AppShell: AppShell = Object.assign(BaseAppShell, {Span})
