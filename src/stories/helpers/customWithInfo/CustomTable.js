import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import styles from '../../../styles/variables';
import { globalStyle } from '../../../styles/mixins';


const CustomTable = styled.table`
  ${globalStyle()}
  border-collapse: collapse;
  width: 100%;
  max-width: 500px;
  margin: 20px 0px 10px;
  border-left: 4px solid ${styles.colors.MAIN_COLOR};
  th, td {
    padding: 3px 5px;
    border-bottom: 1px solid ${styles.colors.GRAY_LIGHT_2};
    color: ${styles.colors.GRAY_DARKER};
  }
  th {
    text-align: left;
    border-bottom: 2px solid ${styles.colors.GRAY_LIGHT_2};
    color: ${styles.colors.GRAY_DARKER};
  }
  td {
    font-size: 12px;
    span {
      margin-left: 5px;
      color: ${styles.colors.DANGER_COLOR};
      font-size: 14px;
      font-weight: bold;
    }
  }
  tr {
    &:last-of-type {
      td {
        border-bottom: unset;
      }
    }
  }
`;

const PropType = styled.td`
  text-transform: capitalize;
  font-style: italic;
`;

const DefaultValue = styled.td`
  font-weight: bold;
`;

const Description = styled.p`
  margin-top: 10px;
  margin-bottom: 40px;
  color: ${styles.colors.DANGER_COLOR};
  font-style: italic;
  font-size: 12px;
`;

const InfoGlobalStyle = createGlobalStyle`
  .info__close-button {
    font-size: 24px !important;
    padding: 5px 15px !important;
  }
`;

const CustomTableProps = ({ propDefinitions }) => {
  return (
    <Fragment>
      <InfoGlobalStyle />
      <CustomTable>
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Default Value</th>
          </tr>
        </thead>
        <tbody>
          {propDefinitions.map(prop => (
            <tr key={`prop-${prop.property}`}>
              <td>
                {prop.property}
                {prop.required && (
                  <span>*</span>
                )}
              </td>
              <PropType>
                {typeof prop.propType === 'object'
                  ? prop.propType.name
                  : prop.propType}
              </PropType>
              <DefaultValue>{prop.defaultValue}</DefaultValue>
            </tr>
          ))}
        </tbody>
      </CustomTable>
      <Description>
        * is required
      </Description>
    </Fragment>
  );
};

export default CustomTableProps;
