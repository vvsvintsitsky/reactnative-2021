import React from 'react';
import {ScrollView, View, RefreshControl} from 'react-native';

import {TradeItem} from '../../api/types';

import {Search} from '../../components/search/Search';
import {TradeItemPreview} from '../../components/trade-item-preview/TradeItemPreview';
import {InteractiveContent} from '../../components/interactive-content/InteractiveContent';

import {styles} from './styles';
import {ShadowContainer} from '../../components/shadow-container/ShadowContainer';

export function Main({
  tradeItems,
  refetch,
  isLoading,
  onProductSelect,
}: {
  tradeItems: TradeItem[];
  refetch: () => void;
  isLoading: boolean;
  onProductSelect: (productId: string) => void;
}) {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.root}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refetch} />
      }>
      <ShadowContainer distance={4} startColor="#0000004D" sides={['bottom']}>
        <View style={styles.search}>
          <Search style={styles.searchInput} />
        </View>
      </ShadowContainer>
      <View style={styles.items}>
        {tradeItems.map(item => (
          <InteractiveContent
            key={item.id}
            onPress={() => onProductSelect(item.id)}>
            <ShadowContainer
              corners={[]}
              radius={5}
              distance={2}
              startColor="#00000040"
              sides={['left', 'right']}
              containerViewStyle={styles.itemShadow}>
              <ShadowContainer
                corners={['bottomLeft', 'bottomRight']}
                radius={5}
                distance={4}
                startColor="#00000040"
                sides={['bottom']}>
                <TradeItemPreview tradeItem={item} style={styles.item} />
              </ShadowContainer>
            </ShadowContainer>
          </InteractiveContent>
        ))}
      </View>
    </ScrollView>
  );
}
