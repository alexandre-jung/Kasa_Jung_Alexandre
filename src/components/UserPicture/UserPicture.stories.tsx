import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserPictureComponent from '@components/UserPicture';

export default {
  title: 'components/UserPicture',
  component: UserPictureComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof UserPictureComponent>;

const Template: ComponentStory<typeof UserPictureComponent> = (args) => (
  <UserPictureComponent {...args} />
);

export const UserPicture = Template.bind({});
UserPicture.args = {
  src: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg',
  alt: 'Picture of Della Case',
  className: '',
};
