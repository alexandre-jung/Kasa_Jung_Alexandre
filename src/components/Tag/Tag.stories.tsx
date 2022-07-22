import { ComponentStory, ComponentMeta } from '@storybook/react';

import TagComponent from '@/components/Tag';

export default {
  title: 'components/Tag',
  component: TagComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof TagComponent>;

const Template: ComponentStory<typeof TagComponent> = (args) => (
  <TagComponent {...args} />
);

export const Tag = Template.bind({});
Tag.args = {
  label: 'tag-name',
  className: '',
};
