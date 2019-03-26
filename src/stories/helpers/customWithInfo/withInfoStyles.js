import styles from '../../../styles/variables';

const withInfoStyles = {
  button: {
    base: {
      animation: 'highlight 4s infinite',
      backgroundColor: styles.colors.INFO_COLOR,
      fontWeight: 'bold',
    },
    topRight: {
      bottom: '30px',
      right: '100px',
      left: 'unset',
      top: 'unset',
      borderRadius: '100px',
    },
  },
};

export default withInfoStyles;
