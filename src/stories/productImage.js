import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductImage from '../components/ProductImage';
import customWithInfo from './helpers/customWithInfo';
import BurgerImage from './images/burger.jpg';
import { theme } from '..';

storiesOf('ProductImage', module)
  .addDecorator(customWithInfo())
  .add('Default style', () => <ProductImage image={BurgerImage} />)
  .add('Small style', () => (
    <ProductImage image={BurgerImage} small />
  ))
  .add('Empty image style', () => <ProductImage image={null} />)
  .add('Empty small style', () => (
    <ProductImage image={null} small iconOnly />
  ))
  .add('Custom colors style', () => (
    <ProductImage
      image={null}
      backgroundColor={theme.styles.colors.MAIN_COLOR}
      fontColor={theme.styles.colors.WHITE}
      iconColor={theme.styles.colors.WHITE}
    />
  ))
  .add('Custom size style', () => (
    <ProductImage
      image={null}
      size="120px"
      fontSize="14px"
      iconSize="60px"
    />
  ))
  .add('Custom empty text style', () => (
    <ProductImage
      image={null}
      emptyText="No photo"
    />
  ))
  .add('Custom style style', () => (
    <ProductImage
      image={null}
      backgroundColor="#f1f1f1"
      iconSize="42px"
      iconColor="#e2e2e2"
      fontColor="#d41072"
      customStyles={{
        fontStyle: 'italic',
        position: 'relative',
        '> .product-image-4all__text': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          fontWeight: '600',
          marginTop: '12px',
          marginLeft: '5px',
          transform: 'translate(-50%, -50%) rotate(-10deg)',
          width: '100%',
          textAlign: 'center',
        },
      }}
    />
  ));
