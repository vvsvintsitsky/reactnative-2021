import {Easing, EasingFunction} from 'react-native';

import {convertRgbaColorToString} from '../../utils/color/convertRgbaColorToString';
import {createRgbaColor} from '../../utils/color/createRgbaColor';
import {RgbaColor} from '../../utils/color/types';
import {ANIMATION_START_VALUE, ANIMATION_END_VALUE} from './constants';
import {useAnimation} from './useAnimation';

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
  const animationOptions = useAnimation({duration, easing});

  return {
    ...animationOptions,
    interpolatedValue: animationOptions.animationValueRef.current.interpolate({
      inputRange: [ANIMATION_START_VALUE, ANIMATION_END_VALUE],
      outputRange: [
        convertRgbaColorToString(createRgbaColor(startColor)),
        convertRgbaColorToString(createRgbaColor(endColor)),
      ],
    }),
  };
}
