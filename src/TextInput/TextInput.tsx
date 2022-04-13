import * as React from 'react'
import {styled, VariantProps, CSS} from '../stitches.config'
import {matchChildren} from '../utils/components'

export const StyledInput = styled('input', {
  // Reset
  appearance: 'none',
  color: 'inherit',
  borderWidth: '0',
  boxSizing: 'border-box',
  margin: '0',
  outline: 'none',
  padding: '0',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom
  fontFamily: '$default',
  backgroundColor: '$loContrast',
  boxShadow: 'inset 0 0 0 1px $colors$inputBorder',
  fontVariantNumeric: 'tabular-nums',

  '&:-webkit-autofill': {
    boxShadow: 'inset 0 0 0 1px $colors$inputBorderFocus, inset 0 0 0 100px $colors$inputBorderAutofill',
  },

  '&:-webkit-autofill::first-line': {
    fontFamily: '$default',
    color: '$hiContrast',
  },

  '&:focus': {
    boxShadow: 'inset 0px 0px 0px 1px $colors$inputBorderFocus, 0px 0px 0px 1px $colors$inputBorderFocus',
    '&:-webkit-autofill': {
      boxShadow:
        'inset 0px 0px 0px 1px $colors$inputBorderFocus, 0px 0px 0px 1px $colors$blue8, inset 0 0 0 100px $colors$inputBorderAutofill',
    },
  },
  '&::placeholder': {
    color: '$slate9',
  },
  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: '$slate2',
    color: '$slate8',
    cursor: 'not-allowed',
    '&::placeholder': {
      color: '$slate7',
    },
  },
  '&:read-only': {
    backgroundColor: '$slate2',
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$slate7',
    },
  },

  variants: {
    size: {
      '1': {
        borderRadius: '$1',
        height: '$5',
        fontSize: '$1',
        px: '$1',
        lineHeight: '$sizes$5',
        '&:-webkit-autofill::first-line': {
          fontSize: '$1',
        },
      },
      '2': {
        borderRadius: '$2',
        height: '$6',
        fontSize: '$3',
        px: '$2',
        lineHeight: '$sizes$6',
        '&:-webkit-autofill::first-line': {
          fontSize: '$3',
        },
      },
    },
    variant: {
      ghost: {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$slateA7',
          },
        },
        '&:focus': {
          backgroundColor: '$loContrast',
          boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
        },
        '&:disabled': {
          backgroundColor: 'transparent',
        },
        '&:read-only': {
          backgroundColor: 'transparent',
        },
      },
    },
    state: {
      invalid: {
        boxShadow: 'inset 0 0 0 1px $colors$invalid',
        '&:focus': {
          boxShadow: 'inset 0px 0px 0px 1px $colors$invalidFocus, 0px 0px 0px 1px $colors$invalidFocus',
        },
      },
      valid: {
        boxShadow: 'inset 0 0 0 1px $colors$valid',
        '&:focus': {
          boxShadow: 'inset 0px 0px 0px 1px $colors$validFocus, 0px 0px 0px 1px $colors$validFocus',
        },
      },
    },
    cursor: {
      default: {
        cursor: 'default',
        '&:focus': {
          cursor: 'text',
        },
      },
      text: {
        cursor: 'text',
      },
    },
    leftEnhancer: {
      true: {
        paddingLeft: 28,
      },
    },
  },
  compoundVariants: [
    {
      leftEnhancer: true,
      size: '2',
      css: {
        paddingLeft: 31,
      },
    },
  ],
  defaultVariants: {
    size: '1',
  },
})

const Wrapper = styled('span', {
  position: 'relative',
  color: '$hiContrast',
})

const LeftEnhancer = styled('span', {
  position: 'absolute',
  top: 4,
  left: 7,
  '& > *:first-child': {
    width: '100%',
    height: '100%',
  },
  variants: {
    size: {
      '1': {
        width: 15,
        height: 15,
      },
      '2': {
        width: 18,
        height: 18,
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
})

type TextInputProps = React.ComponentProps<typeof StyledInput>

export const BaseTextInput: React.FC<TextInputProps> = props => {
  const {children, size, css, ...restProps} = props
  const [leftEnhancer] = matchChildren(children, [LeftEnhancer])
  // TODO: The "css" prop below has a type error without the nonsense added in.
  return (
    <Wrapper css={{...(css as object)}}>
      {leftEnhancer && React.cloneElement(leftEnhancer, {size})}
      <StyledInput
        {...restProps}
        size={size}
        leftEnhancer={!!leftEnhancer}
      />
    </Wrapper>
  )
}

type TextInput = typeof BaseTextInput & {LeftEnhancer: typeof LeftEnhancer}

export const TextInput: TextInput = Object.assign(BaseTextInput, {LeftEnhancer})
