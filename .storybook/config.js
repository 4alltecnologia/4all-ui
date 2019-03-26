import { configure, addDecorator } from '@storybook/react';
import { configureActions } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

configureActions({
  depth: 100,
  // Limit the number of items logged into the actions panel
  limit: 20,
});

addDecorator(withA11y)

function loadStories() {
  const req = require.context('../src/stories', true, /\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
