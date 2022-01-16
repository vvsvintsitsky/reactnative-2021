import React from 'react';

import {Animated, View, ViewStyle} from 'react-native';
import {RgbaColor} from '../../utils/color/types';
import {useFireworkAnimation} from '../hooks/useFireworkAnimation';

import {styles} from './styles';

export function FireworkAnimation({
  exposionRadius,
  duration,
  color,
  sparksQuantity,
  style,
}: {
  exposionRadius?: number;
  duration?: number;
  color?: RgbaColor;
  sparksQuantity?: number;
  style?: ViewStyle;
}) {
  const {
    startAnimation,
    scale,
    transforms,
    color: fireworkColor,
  } = useFireworkAnimation({
    exposionRadius,
    duration,
    color,
    sparksQuantity,
  });

  React.useEffect(() => {
    let repeatAnimation = true;

    (async () => {
      while (repeatAnimation) {
        await new Promise<void>(resolve => startAnimation(resolve));
      }
    })();

    return () => {
      repeatAnimation = false;
    };
  }, [startAnimation]);

  return (
    <View style={[styles.root, style]}>
      {transforms.map((interpolatedTransform, index) => (
        <Animated.View
          key={index}
          style={{
            ...styles.spark,
            backgroundColor: fireworkColor,
            transform: [...interpolatedTransform, {scale}],
          }}
        />
      ))}
    </View>
  );
}
