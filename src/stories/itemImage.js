import React from 'react';
import { storiesOf } from '@storybook/react';
import ItemImage from '../components/ItemImage';
import customWithInfo from './helpers/customWithInfo';
import BurgerImage from './images/burger.jpg';
import { theme } from '..';

storiesOf('ItemImage', module)
  .addDecorator(customWithInfo())
  .add('Default style', () => <ItemImage image={BurgerImage} />)
  .add('Small style', () => <ItemImage image={BurgerImage} small />)
  .add('Empty image style', () => <ItemImage image={null} />)
  .add('Empty small style', () => <ItemImage image={null} small iconOnly />)
  .add('Custom colors style', () => (
    <ItemImage
      image={null}
      backgroundColor={theme.styles.colors.MAIN_COLOR}
      fontColor={theme.styles.colors.WHITE}
      iconColor={theme.styles.colors.WHITE}
    />
  ))
  .add('Custom size style', () => (
    <ItemImage image={null} size="120px" fontSize="14px" iconSize="60px" />
  ))
  .add('No Image', () => <ItemImage noImage emptyText="No photo" />)
  .add('Custom Image', () => (
    <ItemImage
      customDefaultIcon={
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
          <path
            fill="#4FA444"
            fillRule="nonzero"
            d="M22.293 10a1 1 0 0 1 0 1.414l-8.94 8.94a1 1 0 0 1-1.415-.002l-3.376-3.39a1 1 0 1 1 1.417-1.411l2.669 2.68L20.878 10a1 1 0 0 1 1.415 0z"
          />
        </svg>
      }
      emptyText="No photo"
    />
  ))
  .add('Custom empty text style', () => <ItemImage image={null} emptyText="No photo" />)
  .add('Custom style style', () => (
    <ItemImage
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
