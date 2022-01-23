import React from 'react';

import {Animated} from 'react-native';

import {useBackgroundColorAnimation} from '../../animations/hooks/useBackgroundColorAnimation';

import {
  PrimaryButton,
  PrimaryButtonProps,
} from '../primary-button/PrimaryButton';

import {ERROR_COLOR, INITIAL_COLOR, styles, SUCCESS_COLOR} from './styles';

export enum SmartButtonStatus {
  INITIAL = 'initial',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type SmartButtonProps = PrimaryButtonProps & {
  status?: SmartButtonStatus;
  onSuccess?: () => void;
  onError?: () => void;
};

export function SmartButton({
  status = SmartButtonStatus.INITIAL,
  onSuccess,
  onError,
  ...props
}: SmartButtonProps) {
  const {
    interpolatedValue: successInterpolatedValue,
    animationValueRef: successAnimationValueRef,
    startAnimation: startSuccessAnimation,
    resetAnimation: resetSuccessAnimation,
  } = useBackgroundColorAnimation({
    startColor: INITIAL_COLOR,
    endColor: SUCCESS_COLOR,
  });

  const {
    interpolatedValue: errorInterpolatedValue,
    animationValueRef: errorAnimationValueRef,
    startAnimation: startErrorAnimation,
    resetAnimation: resetErrorAnimation,
  } = useBackgroundColorAnimation({
    startColor: INITIAL_COLOR,
    endColor: ERROR_COLOR,
  });

  React.useEffect(() => {
    resetErrorAnimation();
    resetSuccessAnimation();

    if (status === SmartButtonStatus.INITIAL) {
      return;
    }

    if (status === SmartButtonStatus.ERROR) {
      startErrorAnimation(onError);
      return;
    }

    if (status === SmartButtonStatus.SUCCESS) {
      startSuccessAnimation(onSuccess);
      return;
    }
  }, [
    status,
    successAnimationValueRef,
    errorAnimationValueRef,
    startSuccessAnimation,
    startErrorAnimation,
    onSuccess,
    onError,
    resetErrorAnimation,
    resetSuccessAnimation,
  ]);

  return (
    <Animated.View
      style={{
        backgroundColor:
          status === SmartButtonStatus.ERROR
            ? errorInterpolatedValue
            : successInterpolatedValue,
      }}>
      <PrimaryButton
        {...props}
        style={{...styles.root, ...(props.style ?? {})}}
      />
    </Animated.View>
  );
}
