import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductImage from '../components/ProductImage';
import customWithInfo from './helpers/customWithInfo';
import BurgerImage from './images/burger.jpg';
import { theme } from '..';

storiesOf('ProductImage', module)
  .add(
    'Default style',
    customWithInfo()(() => <ProductImage image={BurgerImage} />),
  )
  .add(
    'Small style',
    customWithInfo()(() => (
      <ProductImage image={BurgerImage} small size="40px" />
    )),
  )
  .add(
    'Empty image style',
    customWithInfo()(() => <ProductImage image={null} />),
  )
  .add(
    'Empty small style',
    customWithInfo()(() => <ProductImage image={null} small size="40px" />),
  )
  .add(
    'Custom colors style',
    customWithInfo()(() => (
      <ProductImage
        image={null}
        backgroundColor={theme.styles.colors.MAIN_COLOR}
        fontColor={theme.styles.colors.WHITE}
      />
    )),
  )
  .add(
    'Custom style style',
    customWithInfo()(() => (
      <ProductImage
        image={null}
        customStyles={{
          fontStyle: 'italic',
          '> .product-image__icon': {
            transform: 'rotate(-15deg)',
          },
        }}
      />
    )),
  );
