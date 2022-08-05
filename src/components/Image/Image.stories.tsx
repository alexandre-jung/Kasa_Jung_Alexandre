import { ComponentStory, ComponentMeta } from '@storybook/react';

import ImageComponent from '@components/Image';
import { resizeDecorator, titleDecorator } from '@storybook/utils';

export default {
  title: 'components/Image',
  component: ImageComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  decorators: [
    resizeDecorator({ width: 600, resize: 'horizontal' }),
    titleDecorator('Change the src prop to view the error'),
  ],
} as ComponentMeta<typeof ImageComponent>;

const Template: ComponentStory<typeof ImageComponent> = (args) => (
  <ImageComponent {...args} />
);

export const Image = Template.bind({});
Image.args = {
  src: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg',
  alt: 'Some picture',
};
