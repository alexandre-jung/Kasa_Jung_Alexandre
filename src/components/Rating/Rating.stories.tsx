import { ComponentStory, ComponentMeta } from '@storybook/react';

import RatingComponent from '@components/Rating';

export default {
  title: 'components/Rating',
  component: RatingComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof RatingComponent>;

const Template: ComponentStory<typeof RatingComponent> = (args) => (
  <RatingComponent {...args} as="span" />
);

export const Rating = Template.bind({});
Rating.args = {
  rating: 3,
  className: '',
  starClassName: '',
  activeStarClassName: '',
};
