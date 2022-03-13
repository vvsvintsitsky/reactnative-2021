import React from 'react';

import {useNavigation} from '@react-navigation/native';

import SuccessIcon from '../../../assets/icons/Success.svg';

import {Modal} from '../../components/modal/Modal';
import {ShadowedPrimaryButton} from '../../components/shadowed-primary-button/ShadowedPrimaryButton';

import {FireworkAnimation} from '../../animations/firework/FireworkAnimation';
import {createRgbaColor} from '../../utils/color/createRgbaColor';

const FIREWORK_SETTINGS = [
  {
    color: createRgbaColor({r: 255, a: 1}),
    left: -50,
    top: 30,
    duration: 800,
    exposionRadius: 50,
    sparklesQuantity: 6,
  },
  {
    color: createRgbaColor({g: 255, a: 1}),
    sparklesQuantity: 7,
  },
  {
    color: createRgbaColor({b: 1, a: 1}),
    left: 40,
    top: 60,
    duration: 1500,
    exposionRadius: 200,
    sparklesQuantity: 5,
  },
];

export function ProductAddedModal() {
  const navigation = useNavigation();

  const onConfirm = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Modal
      headerText="Product added to your cart"
      icon={<SuccessIcon fill="#A5DC86" />}
      contentDecoration={
        <>
          {FIREWORK_SETTINGS.map((settings, index) => (
            <FireworkAnimation
              key={index}
              duration={settings.duration}
              color={settings.color}
              style={{left: settings.left, top: settings.top}}
              exposionRadius={settings.exposionRadius}
            />
          ))}
        </>
      }>
      <ShadowedPrimaryButton onPress={onConfirm}>OK</ShadowedPrimaryButton>
    </Modal>
  );
}
