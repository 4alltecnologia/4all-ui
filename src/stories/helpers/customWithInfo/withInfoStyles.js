import styles from '../../../styles/variables';

const withInfoStyles = {
  button: {
    base: {
      boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.2)',
      backgroundColor: styles.colors.INFO_COLOR,
      fontWeight: 'bold',
      fontSize: '14px',
      padding: '11px 20px',
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
