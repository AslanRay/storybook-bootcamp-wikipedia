import React from 'react';

import ListItem from './ListItem';

export default {
  title: 'Components/ListItem',
  component: ListItem,
};

const Template = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'https//en.wikipedia.org/Test_Card_F',
  label: 'Test list item',
};
