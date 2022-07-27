import { ComponentStory, ComponentMeta } from '@storybook/react';

import TagListComponent from '@/components/TagList';

export default {
  title: 'components/TagList',
  component: TagListComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  decorators: [
    (story) => (
      <div
        style={{
          resize: 'both',
          overflow: 'hidden',
        }}
      >
        {story()}
      </div>
    ),
  ],
} as ComponentMeta<typeof TagListComponent>;

const Template: ComponentStory<typeof TagListComponent> = (args) => (
  <TagListComponent {...args} />
);

export const TagList = Template.bind({});
TagList.args = {
  tags: ['Canal Saint Martin', 'République', 'Appartement'],
};
