import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
  showAnimation?: boolean
}

export function MultiStep({
  size,
  currentStep = 1,
  showAnimation = true,
}: MultiStepProps) {
  if (size < 1) {
    size = 1
  }
  if (currentStep < 1) {
    currentStep = 1
  }
  if (currentStep > size) {
    currentStep = size
  }

  function returnActiveProp(isActive: boolean) {
    if (showAnimation && isActive) return 'ani-active'
    if (!showAnimation && isActive) return 'active'
    return 'default'
  }

  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--step-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return (
            <Step key={step} variant={returnActiveProp(step <= currentStep)} />
          )
        })}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
