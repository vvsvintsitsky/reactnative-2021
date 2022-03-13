import React from 'react';
import {
  NativeSyntheticEvent,
  TextInput as Input,
  TextInputFocusEventData,
  Animated,
  Text,
} from 'react-native';
import {useInputPlaceholderAnimation} from '../../animations/hooks/useInputPlaceholderAnimation';
import {createPoint} from '../../utils/coodrinates/createPoint';

import {height, paddingHorizontal, styles} from './styles';

const PLACEHOLDER_OFFSET_X = paddingHorizontal * 2;

const PLACEHOLDER_TRANSLATION_START = createPoint({x: PLACEHOLDER_OFFSET_X});
const PLACEHOLDER_TRANSLATION_END = createPoint({
  x: PLACEHOLDER_OFFSET_X,
  y: -height / 2,
});

export function TextInput({
  style,
  placeholder,
  onFocus: onInputFocus,
  onBlur: onInputBlur,
  value,
  ...rest
}: React.ComponentProps<typeof Input>) {
  const [isFocused, setIsFocused] = React.useState(false);
  const inputRef = React.createRef<Input>();

  const {
    onFocus: startFocusAnimation,
    onBlur: startBlurAnimation,
    transforms,
  } = useInputPlaceholderAnimation({
    start: PLACEHOLDER_TRANSLATION_START,
    end: PLACEHOLDER_TRANSLATION_END,
    value,
    inputRef,
    isFocused,
    endScale: 0.9,
  });
  const onFocus: React.EventHandler<
    NativeSyntheticEvent<TextInputFocusEventData>
  > = React.useCallback(
    e => {
      setIsFocused(() => true);
      startFocusAnimation();
      onInputFocus?.(e);
    },
    [onInputFocus, startFocusAnimation],
  );

  const onBlur: React.EventHandler<
    NativeSyntheticEvent<TextInputFocusEventData>
  > = React.useCallback(
    e => {
      startBlurAnimation(() => setIsFocused(() => false));
      onInputBlur?.(e);
    },
    [onInputBlur, startBlurAnimation],
  );

  const isPlaceholderShifted = !!placeholder && (isFocused || !!value);

  return (
    <>
      <Input
        style={[styles.root, style]}
        {...rest}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={isPlaceholderShifted ? undefined : placeholder}
        ref={inputRef}
      />
      {isPlaceholderShifted && (
        <Animated.View style={{...styles.placeholder, transform: transforms}}>
          <Text>{placeholder}</Text>
        </Animated.View>
      )}
    </>
  );
}
