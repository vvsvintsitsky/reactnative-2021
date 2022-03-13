import React from 'react';
import {ScrollView, View, Image, Text, RefreshControl} from 'react-native';

import {TradeItem} from '../../api/types';

import ArrowLeftIcon from '../../../assets/icons/ArrowLeft.svg';
import HeartIcon from '../../../assets/icons/Heart.svg';
import CartIcon from '../../../assets/icons/Cart.svg';

import {Header} from '../../components/header/Header';

import {styles as iconStyles} from '../../components/icon/styles';

import {Slider} from '../../components/slider/Slider';
import {TradeItemName} from '../../components/trade-item-name/TradeItemName';
import {TradeItemPrice} from '../../components/trade-item-price/TradeItemPrice';
import {Section} from '../../components/section/Section';
import {styles as sectionStyles} from '../../components/section/styles';

import {TextButton} from '../../components/text-button/TextButton';
import {InteractiveContent} from '../../components/interactive-content/InteractiveContent';
import {ShadowContainer} from '../../components/shadow-container/ShadowContainer';
import {SingleSelect} from '../../components/single-select/SingleSelect';

import {styles} from './styles';

export function ProductDetails({
  tradeItem,
  currentImageIndex,
  isLoading,
  refetch,
}: {
  tradeItem?: TradeItem;
  currentImageIndex: number;
  isLoading: boolean;
  refetch: () => void;
}) {
  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.root}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }>
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
        {tradeItem && (
          <>
            <View style={styles.slider}>
              <Slider
                itemsQuantity={tradeItem.images.length}
                currentItemIndex={currentImageIndex}>
                <Image
                  source={{uri: tradeItem.images[currentImageIndex]}}
                  style={styles.image}
                />
              </Slider>
            </View>
            <View style={styles.details}>
              <View style={styles.sectionUnderline}>
                <TradeItemName name={tradeItem.name} />
                <TradeItemPrice tradeItem={tradeItem} style={styles.price} />
              </View>
              <Section title="Select Option" style={styles.sectionUnderline}>
                <SingleSelect
                  options={tradeItem.options.map(option => option.id)}
                />
              </Section>
              <Section title="Description">
                <Text style={sectionStyles.content}>
                  {tradeItem.description}
                </Text>
              </Section>
            </View>
          </>
        )}
      </ScrollView>
      {tradeItem && (
        <ShadowContainer
          shadowViewStyle={styles.footer}
          viewStyle={styles.footer}
          distance={2}
          startColor="#0000004D"
          sides={['bottom']}>
          <TextButton style={styles.addToCart}>ADD TO CART</TextButton>
        </ShadowContainer>
      )}
    </>
  );
}
