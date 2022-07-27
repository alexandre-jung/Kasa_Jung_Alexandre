import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThumbnailComponent from '@components/Thumbnail';

export default {
  title: 'components/Thumbnail',
  component: ThumbnailComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <>
        <h4 className="text-gray-4">
          Resize the container to change the thumbnail size
        </h4>
        <div
          style={{
            resize: 'both',
            overflow: 'hidden',
            width: '400px',
            height: '300px',
          }}
        >
          {Story()}
        </div>
      </>
    ),
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
