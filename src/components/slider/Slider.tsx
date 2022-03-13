import React from 'react';
import {View} from 'react-native';

import PreviousIcon from '../../../assets/icons/Previous.svg';
import NextIcon from '../../../assets/icons/Next.svg';
import DotIcon from '../../../assets/icons/Dot.svg';

import {styles as iconStyles} from '../icon/styles';
import {styles} from './styles';

export function Slider({
  children,
  itemsQuantity,
  currentItemIndex,
}: React.PropsWithChildren<{itemsQuantity: number; currentItemIndex: number}>) {
  return (
    <View style={styles.root}>
      <View style={styles.itemViewContainer}>
        <PreviousIcon style={iconStyles.root} color={styles.buttonIcon.color} />
        <View style={styles.itemView}>{children}</View>
        <NextIcon style={iconStyles.root} color={styles.buttonIcon.color} />
      </View>
      <View style={styles.itemPositionIndicator}>
        {Array.from({length: itemsQuantity}, (_, index) => (
          <DotIcon
            key={index}
            style={styles.positionIcon}
            color={
              currentItemIndex === index
                ? styles.currentPositionIcon.color
                : undefined
            }
          />
        ))}
      </View>
    </View>
  );
}
