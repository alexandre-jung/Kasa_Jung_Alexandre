import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserComponent from '@/components/User';

export default {
  title: 'components/User',
  component: UserComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof UserComponent>;

const Template: ComponentStory<typeof UserComponent> = (args) => (
  <UserComponent {...args} />
);

export const User = Template.bind({});
User.args = {
  username: 'Della Case',
  picture:
    'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg',
  className: '',
};
