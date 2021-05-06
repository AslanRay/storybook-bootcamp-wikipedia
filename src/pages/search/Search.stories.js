import React from 'react';

import Search from './Search';

export default {
  title: 'Pages/Search',
  component: Search,
};

const Template = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  location: {
    search: '?query=test',
  },
};

export const NoData = Template.bind({});
NoData.args = {
  location: {
    search: '?query=',
  },
};
