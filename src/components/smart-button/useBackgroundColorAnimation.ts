import React from 'react';

import {Animated, Easing} from 'react-native';

import {convertRgbaColorToString} from '../../utils/color/convertRgbaColorToString';
import {createRgbaColor} from '../../utils/color/createRgbaColor';
import {RgbaColor} from '../../utils/color/types';

export const ANIMATION_START_VALUE = 0;

export const ANIMATION_END_VALUE = 1;

export function useBackgroundColorAnimation({
  duration = 2000,
  startColor,
  endColor,
  onAnimationEnd,
}: {
  startColor?: Partial<RgbaColor>;
  endColor?: Partial<RgbaColor>;
  duration?: number;
  onAnimationEnd?: () => void;
}) {
  const animationValueRef = React.useRef(
    new Animated.Value(ANIMATION_START_VALUE),
  );

  const startAnimation = React.useCallback(() => {
    animationValueRef.current.setValue(ANIMATION_START_VALUE);

    Animated.timing(animationValueRef.current, {
      toValue: ANIMATION_END_VALUE,
      easing: Easing.bounce,
      duration,
      useNativeDriver: false,
    }).start(onAnimationEnd);
  }, [duration, onAnimationEnd]);

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
  };
}
