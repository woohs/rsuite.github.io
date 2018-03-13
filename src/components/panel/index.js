import React from 'react';
import ComponentExample from '../ComponentExample';
import { Button, Icon, Panel, PanelGroup } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./panel-group.md'),
  require('./accordion.md')
];


export default () => {
  return (
    <ComponentExample
      dependencies={{
        PanelGroup,
        Panel,
        Icon,
        Button
      }}
      context={context}
      examples={examples}
    />
  );
};
