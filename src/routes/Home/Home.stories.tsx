import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomeComponent from '@routes/Home';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'routes/Home',
  component: HomeComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  decorators: [(Story) => <BrowserRouter>{Story()}</BrowserRouter>],
} as ComponentMeta<typeof HomeComponent>;

const Template: ComponentStory<typeof HomeComponent> = () => (
  <HomeComponent />
);

export const Home = Template.bind({});
