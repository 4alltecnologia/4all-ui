import { configure } from '@storybook/react';
import { configureActions } from '@storybook/addon-actions';

configureActions({
  depth: 100,
  // Limit the number of items logged into the actions panel
  limit: 20,
});

function loadStories() {
  const req = require.context('../src/stories', true, /\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
