import { keyframes, styled } from '../../styles'
import { Text } from '../Text'

export const MultiStepContainer = styled('div', {})

export const Label = styled(Text, {
  color: '$gray200',

  defaultVariants: {
    size: 'xs',
  },
})

export const Steps = styled('div', {
  display: 'grid',
  gap: '$2',
  marginTop: '$1',
  gridTemplateColumns: 'repeat(var(--step-size), 1fr)',
})

const activeAnimationIn = keyframes({
  from: {
    backgroundPosition: '100% 0%',
  },

  '50%': {
    backgroundPosition: '50% 0%',
  },

  to: {
    backgroundPosition: '0% 0%',
  },
})

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$px',
  background:
    'linear-gradient(to right, $gray100 0%, $gray100 30%, $gray600 60%, $gray600 100%)',
  backgroundSize: '1000% 100%',
  backgroundPosition: '100% 0%',

  variants: {
    variant: {
      'ani-active': {
        '& + &': {
          animation: `${activeAnimationIn} 1s ease-out`,
          animationFillMode: 'forwards',
        },
        '&:first-child': {
          backgroundPosition: '0% 0%',
        },
      },
      active: {
        backgroundPosition: '0% 0%',
      },
      default: {},
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})
