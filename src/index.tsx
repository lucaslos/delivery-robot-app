import Root from '@src/Root';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { name, version } from '../package.json';
import { initializeGA, initializeInspectlet } from '@src/utils/analytics';

// TODO: remove unused packages
// TODO: react tooltips
if (__PROD__) {
  // eslint-disable-next-line no-console
  console.log(`${name} v${version}`);
}

if (module.hot) {
  module.hot.accept('../package.json', () => {});
}

ReactDOM.render(
  <Root />,
  document.getElementById('app'),
);
