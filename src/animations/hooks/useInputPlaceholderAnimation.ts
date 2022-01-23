import React from 'react';
import {TextInput} from 'react-native';
import {Point} from '../../utils/coodrinates/types';
import {useTranslateXYAnimation} from './useTranslateXYAnimation';

export function useInputPlaceholderAnimation({
  value,
  isFocused,
  inputRef,
  start,
  end,
  startScale,
  endScale,
}: {
  value?: string;
  isFocused: boolean;
  start: Point;
  end: Point;
  startScale?: number;
  endScale?: number;
  inputRef: React.RefObject<TextInput>;
}) {
  const {startAnimation: startFocusAnimation, transform: focusedTransform} =
    useTranslateXYAnimation({
      startScale,
      endScale,
      start,
      end,
    });

  const {startAnimation: startBlurAnimation, transform: bluredTransform} =
    useTranslateXYAnimation({
      startScale: endScale,
      endScale: startScale,
      start: end,
      end: start,
    });

  React.useLayoutEffect(() => {
    if (inputRef.current?.isFocused() || value) {
      startFocusAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    onFocus: startFocusAnimation,
    onBlur: startBlurAnimation,
    transforms: isFocused || value ? focusedTransform : bluredTransform,
  };
}
