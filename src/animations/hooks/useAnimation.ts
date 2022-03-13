import React from 'react';

import {Animated, Easing, EasingFunction} from 'react-native';

import {ANIMATION_START_VALUE, ANIMATION_END_VALUE} from './constants';

export function useAnimation({
  duration = 2000,
  easing = Easing.bounce,
}: {
  duration?: number;
  easing?: EasingFunction;
}) {
  const animationValueRef = React.useRef(
    new Animated.Value(ANIMATION_START_VALUE),
  );

  const createAnimation = React.useCallback(
    () =>
      Animated.timing(animationValueRef.current, {
        toValue: ANIMATION_END_VALUE,
        easing,
        duration,
        useNativeDriver: false,
      }),
    [duration, easing],
  );

  const resetAnimation = React.useCallback(() => {
    animationValueRef.current.setValue(ANIMATION_START_VALUE);
  }, []);

  const startAnimation = React.useCallback(
    (onAnimationEnd?: () => void) => {
      resetAnimation();

      createAnimation().start(onAnimationEnd);
    },
    [createAnimation, resetAnimation],
  );

  return {
    animationValueRef,
    startAnimation,
    createAnimation,
    resetAnimation,
  };
}
