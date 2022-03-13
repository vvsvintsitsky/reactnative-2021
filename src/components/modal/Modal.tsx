import React from 'react';
import {View, Text, Modal as ModalContainer} from 'react-native';

import {styles} from './styles';

export function Modal({
  headerText,
  contentText,
  icon,
  children,
}: React.PropsWithChildren<{
  headerText: string;
  contentText?: React.ReactNode;
  icon: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <ModalContainer animationType="none" visible transparent>
      <View style={styles.container}>
        <View style={styles.root}>
          <View style={styles.icon}>{icon}</View>
          <Text style={styles.header}>{headerText}</Text>
          {contentText && <Text style={styles.text}>{contentText}</Text>}
          <View style={styles.content}>{children}</View>
        </View>
      </View>
    </ModalContainer>
  );
}
