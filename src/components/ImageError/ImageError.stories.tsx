import { ComponentStory, ComponentMeta } from '@storybook/react';

import ImageErrorComponent from '@components/ImageError';
import { resizeDecorator } from '@storybook/utils';

export default {
  title: 'components/ImageError',
  component: ImageErrorComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  decorators: [resizeDecorator({ width: 600, height: (600 * 9) / 16 })],
} as ComponentMeta<typeof ImageErrorComponent>;

const Template: ComponentStory<typeof ImageErrorComponent> = (args) => (
  <ImageErrorComponent {...args} />
);

export const ImageError = Template.bind({});
ImageError.args = {
  className: 'bg-light',
};
