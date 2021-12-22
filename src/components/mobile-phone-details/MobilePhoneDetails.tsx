import React from 'react';

import {MobilePhone} from '../../api/types';

import {ProductDetails} from '../product-details/ProductDetails';
import {styles as productDetailsStyles} from '../product-details/styles';
import {Section} from '../section/Section';
import {SingleSelect} from '../single-select/SingleSelect';

const item: MobilePhone = {
  id: '0',
  name: 'Item_0',
  description:
    'The phone features a 6.088 inch HD+ (1560 x 720 pixel) resolution, 283ppi Super AMOLED display, a glass and plastic body, with Corning Gorilla Glass 5 protection on its front as well as its back. It is powered by a Qualcomm Snapdragon 665 SoC. It also has a 2.0, Type-C 1.0 reversible connector.',
  currentPrice: 1,
  price: 2,
  hasDiscount: true,
  imageSrc: 'https://avatars.githubusercontent.com/u/17836706?v=4',
  colors: ['Blue'],
};

export function MobilePhoneDetails({
  mobilePhone = item,
}: {
  mobilePhone: MobilePhone;
}) {
  return (
    <ProductDetails tradeItem={mobilePhone}>
      <Section
        title="Select Color"
        style={productDetailsStyles.sectionUnderline}>
        <SingleSelect options={mobilePhone.colors} />
      </Section>
    </ProductDetails>
  );
}
