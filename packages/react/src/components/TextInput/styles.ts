import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'center',

  variants: {
    size: {
      sm: { padding: '$2 $3' },
      md: { padding: '$3 $4' },
    },
  },

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',

    input: {
      cursor: 'inherit',
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  flex: 1,
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  background: 'transparent',
  border: 'none',
  '&:focus': {
    outline: 0,
  },

  '&::placeholder': {
    color: '$gray400',
  },
})
