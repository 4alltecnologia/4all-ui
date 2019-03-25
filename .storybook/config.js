import { configure } from '@storybook/react';
import { configureActions } from '@storybook/addon-actions';

configureActions({
  depth: 100,
  // Limit the number of items logged into the actions panel
  limit: 20,
});

function loadStories() {
  require('../src/stories/button.js');
  require('../src/stories/loader.js');
  require('../src/stories/tag.js');
  require('../src/stories/switch.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);