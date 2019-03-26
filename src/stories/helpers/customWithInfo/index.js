import { withInfo } from '@storybook/addon-info';
import CustomTableProps from './CustomTable';
import withInfoStyles from './withInfoStyles';

const customWithInfo = () => withInfo({
  TableComponent: CustomTableProps,
  styles: withInfoStyles,
});

export default customWithInfo;
