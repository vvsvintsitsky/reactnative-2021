import React from 'react';
import {SvgProps} from 'react-native-svg';

import {styles as iconStyles} from '../icon/styles';
import {InteractiveContent} from '../interactive-content/InteractiveContent';

import {styles} from './styles';

export function IconButton({
  icon: Icon,
  onPress,
  color = '#FFFFFF',
}: {
  icon: React.FC<SvgProps>;
  onPress?: () => void;
  color?: string;
}) {
  return (
    <InteractiveContent onPress={onPress} style={styles.root}>
      <Icon
        style={iconStyles.root}
        color={color}
        width={iconStyles.root.width}
        height={iconStyles.root.height}
      />
    </InteractiveContent>
  );
}
