import React from 'react';

import {Animated} from 'react-native';

import {
  PrimaryButton,
  PrimaryButtonProps,
} from '../primary-button/PrimaryButton';

import {ERROR_COLOR, INITIAL_COLOR, styles, SUCCESS_COLOR} from './styles';
import {
  ANIMATION_START_VALUE,
  useBackgroundColorAnimation,
} from './useBackgroundColorAnimation';

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
  } = useBackgroundColorAnimation({
    startColor: INITIAL_COLOR,
    endColor: SUCCESS_COLOR,
    onAnimationEnd: onSuccess,
  });

  const {
    interpolatedValue: errorInterpolatedValue,
    animationValueRef: errorAnimationValueRef,
    startAnimation: startErrorAnimation,
  } = useBackgroundColorAnimation({
    startColor: INITIAL_COLOR,
    endColor: ERROR_COLOR,
    onAnimationEnd: onError,
  });

  React.useEffect(() => {
    errorAnimationValueRef.current.setValue(ANIMATION_START_VALUE);
    successAnimationValueRef.current.setValue(ANIMATION_START_VALUE);

    if (status === SmartButtonStatus.INITIAL) {
      return;
    }

    if (status === SmartButtonStatus.ERROR) {
      startErrorAnimation();
      return;
    }

    if (status === SmartButtonStatus.SUCCESS) {
      startSuccessAnimation();
      return;
    }
  }, [
    status,
    successAnimationValueRef,
    errorAnimationValueRef,
    startSuccessAnimation,
    startErrorAnimation,
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
