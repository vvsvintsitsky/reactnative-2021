import React from 'react';

import {Animated, Easing, EasingFunction} from 'react-native';

import {convertRgbaColorToString} from '../../utils/color/convertRgbaColorToString';
import {createRgbaColor} from '../../utils/color/createRgbaColor';
import {RgbaColor} from '../../utils/color/types';

export const ANIMATION_START_VALUE = 0;

export const ANIMATION_END_VALUE = 1;

export function useBackgroundColorAnimation({
  duration = 2000,
  startColor,
  endColor,
  easing = Easing.bounce,
}: {
  startColor?: Partial<RgbaColor>;
  endColor?: Partial<RgbaColor>;
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

  const startAnimation = React.useCallback(
    (onAnimationEnd?: () => void) => {
      animationValueRef.current.setValue(ANIMATION_START_VALUE);

      createAnimation().start(onAnimationEnd);
    },
    [createAnimation],
  );

  return {
    animationValueRef,
    startAnimation,
    interpolatedValue: animationValueRef.current.interpolate({
      inputRange: [ANIMATION_START_VALUE, ANIMATION_END_VALUE],
      outputRange: [
        convertRgbaColorToString(createRgbaColor(startColor)),
        convertRgbaColorToString(createRgbaColor(endColor)),
      ],
    }),
    createAnimation,
  };
}
