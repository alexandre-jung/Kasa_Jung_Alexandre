import { ComponentStory, ComponentMeta } from '@storybook/react';

import DetailHeaderComponent from '@components/DetailHeader';
import mock from '@mock/logements.json';
import { resizeDecorator } from '@storybook/utils';

export default {
  title: 'layout/DetailHeader',
  component: DetailHeaderComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  decorators: [resizeDecorator({ width: 1000, resize: 'horizontal' })],
} as ComponentMeta<typeof DetailHeaderComponent>;

const Template: ComponentStory<typeof DetailHeaderComponent> = (args) => (
  <DetailHeaderComponent {...args} />
);

export const DetailHeader = Template.bind({});
DetailHeader.args = {
  title: mock[1].title,
  location: mock[1].location,
  tags: mock[1].tags,
  username: mock[1].host.name && 'Della Case',
  userPicture: mock[1].host.picture,
  rating: parseInt(mock[1].rating, 10),
  className: '',
};
