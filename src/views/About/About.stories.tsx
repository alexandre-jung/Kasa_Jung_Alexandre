import { ComponentStory, ComponentMeta } from '@storybook/react';

import AboutComponent from '@views/About';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'views/About',
  component: AboutComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  decorators: [(Story) => <BrowserRouter>{Story()}</BrowserRouter>],
} as ComponentMeta<typeof AboutComponent>;

const Template: ComponentStory<typeof AboutComponent> = () => (
  <AboutComponent />
);

export const About = Template.bind({});
