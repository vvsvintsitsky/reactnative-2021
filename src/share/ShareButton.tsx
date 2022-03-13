import React from 'react';

import {DrawerItem} from '@react-navigation/drawer';
import Share, {ShareOptions} from 'react-native-share';

import ShareIcon from '../../assets/icons/Share.svg';

import {styles as iconStyles} from '../components/icon/styles';

const SHARE_OPTIONS: ShareOptions = {
  url: 'https://google.com/',
  title: 'Share url with someone',
};

export function ShareButton() {
  const onShare = React.useCallback(async () => {
    try {
      await Share.open(SHARE_OPTIONS);
    } catch (error) {
      return;
    }
  }, []);

  return (
    <DrawerItem
      label="Share"
      onPress={onShare}
      icon={() => <ShareIcon style={iconStyles.root} />}
    />
  );
}
