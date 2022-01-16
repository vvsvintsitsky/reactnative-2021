import React from 'react';

import {Easing} from 'react-native';
import {createRgbaColor} from '../../utils/color/createRgbaColor';
import {RgbaColor} from '../../utils/color/types';
import {
  ANIMATION_END_VALUE,
  ANIMATION_START_VALUE,
  useBackgroundColorAnimation,
} from '../hooks/useBackgroundColorAnimation';

const SPARKS_QUANTITY = 10;

const EXPLOSION_RADIUS = 90;

const DURATION = 1000;

const COLOR = createRgbaColor({r: 255, a: 1});

const EASING = Easing.out(Easing.ease);

export function useFireworkAnimation({
  exposionRadius = EXPLOSION_RADIUS,
  duration = DURATION,
  color = COLOR,
  sparksQuantity = SPARKS_QUANTITY,
}: {
  exposionRadius?: number;
  duration?: number;
  color?: RgbaColor;
  sparksQuantity?: number;
}) {
  const {animationValueRef, interpolatedValue, startAnimation} =
    useBackgroundColorAnimation({
      easing: EASING,
      duration: duration,
      startColor: color,
    });

  const interpolatedScale = animationValueRef.current.interpolate({
    inputRange: [ANIMATION_START_VALUE, ANIMATION_END_VALUE],
    outputRange: [1, 0],
  });

  const interpolatedTransforms = React.useMemo(
    () =>
      Array.from({length: sparksQuantity}, (_, index) => {
        const interpolateValue = (
          calculateValueFromRadians: (value: number) => number,
        ) =>
          animationValueRef.current.interpolate({
            inputRange: [ANIMATION_START_VALUE, ANIMATION_END_VALUE],
            outputRange: [
              0,
              calculateValueFromRadians(
                (index * Math.PI * 2) / sparksQuantity,
              ) * exposionRadius,
            ],
          });
        return [
          {
            translateX: interpolateValue(Math.sin),
          },
          {
            translateY: interpolateValue(Math.cos),
          },
        ];
      }),
    [sparksQuantity, exposionRadius, animationValueRef],
  );

  return {
    scale: interpolatedScale,
    transforms: interpolatedTransforms,
    color: interpolatedValue,
    startAnimation,
  };
}
