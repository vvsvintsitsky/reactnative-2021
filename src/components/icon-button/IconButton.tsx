import React from 'react';
import {SvgProps} from 'react-native-svg';

import {styles as iconStyles} from '../icon/styles';
import {
  InteractiveContent,
  InteractiveContentProps,
} from '../interactive-content/InteractiveContent';

import {styles} from './styles';

interface IconButtonProps {
  icon: React.FC<SvgProps>;
  onPress?: () => void;
  color?: string;
  style?: InteractiveContentProps['style'];
  iconStyle?: SvgProps['style'];
  viewBox?: SvgProps['viewBox'];
}

export function IconButton({
  icon: Icon,
  onPress,
  color = '#FFFFFF',
  style = {},
  iconStyle = {},
  viewBox,
}: IconButtonProps) {
  return (
    <InteractiveContent onPress={onPress} style={[styles.root, style]}>
      <Icon
        style={[iconStyles.root, iconStyle]}
        color={color}
        width={iconStyles.root.width}
        height={iconStyles.root.height}
        viewBox={viewBox}
      />
    </InteractiveContent>
  );
}
