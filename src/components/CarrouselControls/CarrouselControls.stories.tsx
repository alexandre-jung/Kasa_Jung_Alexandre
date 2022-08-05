import { ComponentStory, ComponentMeta } from '@storybook/react';

import CarrouselControlsComponent from '@components/CarrouselControls';
import { resizeDecorator } from '@storybook/utils';

export default {
  title: 'components/CarrouselControls',
  component: CarrouselControlsComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  decorators: [resizeDecorator({ width: 600, height: 400 })],
} as ComponentMeta<typeof CarrouselControlsComponent>;

const Template: ComponentStory<typeof CarrouselControlsComponent> = (args) => (
  <CarrouselControlsComponent {...args} />
);

export const CarrouselControls = Template.bind({});
CarrouselControls.args = {};
