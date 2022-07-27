import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeaderComponent from '@components/Header';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'components/Header',
  component: HeaderComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  decorators: [(Story) => <BrowserRouter>{Story()}</BrowserRouter>],
} as ComponentMeta<typeof HeaderComponent>;

const Template: ComponentStory<typeof HeaderComponent> = (args) => (
  <HeaderComponent {...args} />
);

export const Header = Template.bind({});
Header.args = {
  className: '',
};
