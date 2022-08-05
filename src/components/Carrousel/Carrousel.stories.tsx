import { ComponentStory, ComponentMeta } from '@storybook/react';

import CarrouselComponent from '@components/Carrousel';
import { resizeDecorator } from '@storybook/utils';
import Image from '../Image';

export default {
  title: 'components/Carrousel',
  component: CarrouselComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  argTypes: {
    autoplayInterval: {
      control: { type: 'number', min: 1000, max: 30000, step: 500 },
    },
    animationSpeed: {
      control: { type: 'number', min: 200, max: 2000, step: 100 },
    },
  },
  decorators: [
    resizeDecorator({ width: 600, height: 415, resize: 'horizontal' }),
  ],
} as ComponentMeta<typeof CarrouselComponent>;

const Template: ComponentStory<typeof CarrouselComponent> = (args) => (
  <CarrouselComponent {...args} />
);

const imageSources = [
  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg',
  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg',
  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg',
  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg',
  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg',
  'this-image-does-not-exist',
];

export const Carrousel = Template.bind({});
Carrousel.args = {
  defaultAutoplay: false,
  autoplayInterval: 5000,
  animationSpeed: 500,
  children: imageSources.map((imageSource) => (
    <Image
      className="h-100"
      src={imageSource}
      alt={imageSource}
      key={imageSource}
      errorStyle={{ padding: '0 90px' }}
    />
  )),
};
