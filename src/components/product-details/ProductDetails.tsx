import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  TouchableHighlight,
  Image,
  Text,
  Button,
} from 'react-native';

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

export function ProductDetails({
  children,
  tradeItem,
}: React.PropsWithChildren<{tradeItem: TradeItem}>) {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.root}>
        <Header style={styles.header}>
          <TouchableHighlight>
            <ArrowLeftIcon
              style={iconStyles.root}
              color={styles.headerIcon.color}
            />
          </TouchableHighlight>
          <View style={styles.headerControls}>
            <TouchableHighlight>
              <HeartIcon
                style={iconStyles.root}
                color={styles.headerIcon.color}
              />
            </TouchableHighlight>
            <TouchableHighlight>
              <CartIcon
                style={iconStyles.root}
                color={styles.headerIcon.color}
              />
            </TouchableHighlight>
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
            <TradeItemPrice tradeItem={tradeItem} />
          </View>
          {children}
          <Section title="Description">
            <Text style={sectionStyles.content}>{tradeItem.description}</Text>
          </Section>
        </View>
        <Button title="ADD TO CART" color="#008ACE" />
      </ScrollView>
    </SafeAreaView>
  );
}
