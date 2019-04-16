import React, { Fragment } from 'react';
import PropType from 'prop-types';
import * as styles from './style';
import theme from '../../styles/variables';
import { GlobalStyle } from '../../styles/mixins';

const ProgressBar = ({
  id,
  className,
  progress,
  barColor,
  height,
  width,
  customStyles,
  roundness,
}) => (
  <Fragment>
    <styles.Container
      id={id}
      className={`progress-bar-4all ${className}`}
      height={height}
      width={width}
      customStyles={customStyles}
      roundness={roundness}
    >
      <styles.Bar
        className="progress-bar-fill"
        barColor={barColor}
        progress={progress}
        height={height}
        roundness={roundness}
      />
    </styles.Container>
    <GlobalStyle />
  </Fragment>
);

ProgressBar.propTypes = {
  id: PropType.string,
  className: PropType.string,
  progress: PropType.number,
  barColor: PropType.string,
  height: PropType.string,
  width: PropType.string,
  customStyles: PropType.object,
  roundness: PropType.string,
};

ProgressBar.defaultProps = {
  id: '',
  className: '',
  progress: 0,
  barColor: theme.colors.MAIN_COLOR,
  height: '5px',
  width: '200px',
  customStyles: {},
  roundness: theme.borders.RADIUS_1,
};

export default ProgressBar;
