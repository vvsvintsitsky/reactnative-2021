import React from 'react';

import {createPoint} from '../../utils/coodrinates/createPoint';
import {Point} from '../../utils/coodrinates/types';
import {ANIMATION_START_VALUE, ANIMATION_END_VALUE} from './constants';
import {useAnimation} from './useAnimation';

export function useTranslateXYAnimation({
  start,
  end,
  startScale = 1,
  endScale = 1,
  duration = 1000,
}: {
  start?: Partial<Point>;
  end?: Partial<Point>;
  startScale?: number;
  endScale?: number;
  duration?: number;
}) {
  const {animationValueRef, ...rest} = useAnimation({
    duration,
  });

  const interpolatedTransforms = React.useMemo(() => {
    const startPoint = createPoint(start);
    const endPoint = createPoint(end);
    return [
      {
        translateX: animationValueRef.current.interpolate({
          inputRange: [ANIMATION_START_VALUE, ANIMATION_END_VALUE],
          outputRange: [startPoint.x, endPoint.x],
        }),
      },
      {
        translateY: animationValueRef.current.interpolate({
          inputRange: [ANIMATION_START_VALUE, ANIMATION_END_VALUE],
          outputRange: [startPoint.y, endPoint.y],
        }),
      },
      {
        scale: animationValueRef.current.interpolate({
          inputRange: [ANIMATION_START_VALUE, ANIMATION_END_VALUE],
          outputRange: [startScale, endScale],
        }),
      },
    ];
  }, [animationValueRef, start, end, startScale, endScale]);

  return {
    transform: interpolatedTransforms,
    animationValueRef,
    ...rest,
  };
}
