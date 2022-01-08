import React from 'react';
import {ScrollView, View, Image, Text, RefreshControl} from 'react-native';

import {TradeItem, TradeItemOption} from '../../api/types';

import {Slider} from '../../components/slider/Slider';
import {TradeItemName} from '../../components/trade-item-name/TradeItemName';
import {TradeItemPrice} from '../../components/trade-item-price/TradeItemPrice';
import {Section} from '../../components/section/Section';
import {styles as sectionStyles} from '../../components/section/styles';

import {TextButton} from '../../components/text-button/TextButton';
import {ShadowContainer} from '../../components/shadow-container/ShadowContainer';
import {SingleSelect} from '../../components/single-select/SingleSelect';

import {styles} from './styles';

export function ProductDetails({
  tradeItem,
  currentImageIndex,
  isLoading,
  refetch,
  onAddToCart,
  selectColor,
  selectedColor,
}: {
  tradeItem?: TradeItem;
  currentImageIndex: number;
  isLoading: boolean;
  refetch: () => void;
  onAddToCart: () => void;
  selectColor: (colorOption: TradeItemOption) => void;
  selectedColor?: TradeItemOption;
}) {
  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.root}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }>
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
              <Section title="Select Color" style={styles.sectionUnderline}>
                <SingleSelect
                  options={tradeItem.options}
                  onSelect={selectColor}
                  selectedValue={selectedColor}
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
          <TextButton style={styles.addToCart} onPress={onAddToCart}>
            ADD TO CART
          </TextButton>
        </ShadowContainer>
      )}
    </>
  );
}
