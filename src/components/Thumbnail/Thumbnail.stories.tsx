import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThumbnailComponent from '@components/Thumbnail';
import { resizeDecorator, titleDecorator } from '@storybook/utils';

export default {
  title: 'components/Thumbnail',
  component: ThumbnailComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  decorators: [
    resizeDecorator({ width: 400, height: 300 }),
    titleDecorator('Resize the container to change the thumbnail size'),
  ],
} as ComponentMeta<typeof ThumbnailComponent>;

const Template: ComponentStory<typeof ThumbnailComponent> = (args) => (
  <ThumbnailComponent {...args} />
);

export const Thumbnail = Template.bind({});
Thumbnail.args = {
  cover:
    'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg',
  title: 'Magnifique appartement proche Canal Saint Martin',
  height: '100%',
};
