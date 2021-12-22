import React from 'react';

import {MobilePhone} from '../../api/types';

import {ProductDetails} from '../product-details/ProductDetails';
import {styles as productDetailsStyles} from '../product-details/styles';
import {Section} from '../section/Section';
import {SingleSelect} from '../single-select/SingleSelect';

export function MobilePhoneDetails({mobilePhone}: {mobilePhone: MobilePhone}) {
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
