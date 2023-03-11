import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  border: '2px solid $gray900',

  '&[data-state="checked"]': {
    background: '$ignite300',
  },

  '&:focus, &[data-state="checked"]': {
    borderColor: '$ignite300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'scale(0.6)',
    opacity: 0,
  },

  '50%': {
    transform: 'scale(1.2)',
  },

  to: {
    transform: 'scale(1)',
    opacity: 1,
  },
})

const slideOut = keyframes({
  from: {
    transform: 'scale(1)',
    opacity: 1,
  },

  to: {
    transform: 'scale(0.8)',
    opacity: 0,
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} .2s ease-in-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} .2s ease-out`,
  },
})
