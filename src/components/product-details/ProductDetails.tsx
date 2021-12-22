import React from 'react';
import {ScrollView, View, Image, Text} from 'react-native';

import {TradeItem} from '../../api/types';

import ArrowLeftIcon from '../../../assets/icons/ArrowLeft.svg';
import HeartIcon from '../../../assets/icons/Heart.svg';
import CartIcon from '../../../assets/icons/Cart.svg';

import {Header} from '../header/Header';

import {styles as iconStyles} from '../icon/styles';

import {Slider} from '../slider/Slider';
import {TradeItemName} from '../trade-item-name/TradeItemName';
import {TradeItemPrice} from '../trade-item-price/TradeItemPrice';
import {Section} from '../section/Section';
import {styles as sectionStyles} from '../section/styles';

import {styles} from './styles';
import {TextButton} from '../text-button/TextButton';
import {InteractiveContent} from '../interactive-content/InteractiveContent';
import {ShadowContainer} from '../shadow-container/ShadowContainer';

export function ProductDetails({
  children,
  tradeItem,
}: React.PropsWithChildren<{tradeItem: TradeItem}>) {
  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.root}>
        <Header style={styles.header}>
          <InteractiveContent>
            <ArrowLeftIcon
              style={iconStyles.root}
              color={styles.headerIcon.color}
            />
          </InteractiveContent>
          <View style={styles.headerControls}>
            <InteractiveContent>
              <HeartIcon
                style={iconStyles.root}
                color={styles.headerIcon.color}
              />
            </InteractiveContent>
            <InteractiveContent interactiveStyle={styles.cartButton}>
              <CartIcon
                style={iconStyles.root}
                color={styles.headerIcon.color}
              />
            </InteractiveContent>
          </View>
        </Header>
        <View style={styles.slider}>
          <Slider itemsQuantity={4} currentItemIndex={1}>
            <Image source={{uri: tradeItem.imageSrc}} style={styles.image} />
          </Slider>
        </View>
        <View style={styles.details}>
          <View style={styles.sectionUnderline}>
            <TradeItemName name={tradeItem.name} />
            <TradeItemPrice tradeItem={tradeItem} style={styles.price} />
          </View>
          {children}
          <Section title="Description">
            <Text style={sectionStyles.content}>{tradeItem.description}</Text>
          </Section>
        </View>
      </ScrollView>
      <ShadowContainer
        shadowViewStyle={styles.footer}
        viewStyle={styles.footer}
        distance={2}
        startColor="#0000004D"
        sides={['bottom']}>
        <TextButton style={styles.addToCart}>ADD TO CART</TextButton>
      </ShadowContainer>
    </>
  );
}
