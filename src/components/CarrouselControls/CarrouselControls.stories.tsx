import { ComponentStory, ComponentMeta } from '@storybook/react';

import CarrouselControlsComponent from '@/components/CarrouselControls';

export default {
  title: 'components/CarrouselControls',
  component: CarrouselControlsComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  decorators: [
    (story) => (
      <div
        style={{
          width: 600,
          height: 400,
          resize: 'both',
          overflow: 'hidden',
          backgroundImage:
            'url(https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg)',
          backgroundSize: 'cover',
        }}
      >
        {story()}
      </div>
    ),
  ],
} as ComponentMeta<typeof CarrouselControlsComponent>;

const Template: ComponentStory<typeof CarrouselControlsComponent> = (args) => (
  <CarrouselControlsComponent {...args} />
);

export const CarrouselControls = Template.bind({});
CarrouselControls.args = {};
