import React from 'react';
import {View} from 'react-native';

import {styles} from './styles';

export function Header({children}: React.PropsWithChildren<{}>) {
  return <View style={styles.root}>{children}</View>;
}
