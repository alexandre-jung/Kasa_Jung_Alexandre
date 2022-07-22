import { ComponentStory, ComponentMeta } from '@storybook/react';

import StarComponent from '@/components/Star';

export default {
  title: 'components/Star',
  component: StarComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof StarComponent>;

const Template: ComponentStory<typeof StarComponent> = (args) => (
  <StarComponent {...args} />
);

export const Star = Template.bind({});
Star.args = {
  active: true,
  className: '',
  small: false,
};
