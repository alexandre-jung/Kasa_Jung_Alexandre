import { ComponentStory, ComponentMeta } from '@storybook/react';

import NotFoundComponent from '@routes/NotFound';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'routes/NotFound',
  component: NotFoundComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [(Story) => <BrowserRouter>{Story()}</BrowserRouter>],
} as ComponentMeta<typeof NotFoundComponent>;

const Template: ComponentStory<typeof NotFoundComponent> = () => (
  <NotFoundComponent />
);

export const NotFound = Template.bind({});
