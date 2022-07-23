import { ComponentStory, ComponentMeta } from '@storybook/react';
import GridComponent from '@/components/Grid';
import Thumbnail from '@/components/Thumbnail';
import lodges from '@/mock/logements.json';

export default {
  title: 'components/Grid',
  component: GridComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <>
        <h4 className="text-gray-4">
          Resize your window to view the grid behavior
        </h4>
        {Story()}
      </>
    ),
  ],
} as ComponentMeta<typeof GridComponent>;

const Template: ComponentStory<typeof GridComponent> = (args) => (
  <GridComponent {...args} />
);

export const Grid = Template.bind({});
Grid.args = {
  children: (
    <>
      {lodges.map((lodge) => (
        <Thumbnail cover={lodge.cover} title={lodge.title} key={lodge.id} />
      ))}
    </>
  ),
};
