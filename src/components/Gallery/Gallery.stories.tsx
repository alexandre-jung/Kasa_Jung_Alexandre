import { ComponentStory, ComponentMeta } from '@storybook/react';
import GalleryComponent from '@components/Gallery';
import Thumbnail from '@components/Thumbnail';
import lodges from '@mock/logements.json';
import { titleDecorator } from '@storybook/utils';

export default {
  title: 'components/Gallery',
  component: GalleryComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  decorators: [titleDecorator('Resize your window to view the gallery behavior')],
} as ComponentMeta<typeof GalleryComponent>;

const Template: ComponentStory<typeof GalleryComponent> = (args) => (
  <GalleryComponent {...args} />
);

export const Gallery = Template.bind({});
Gallery.args = {
  children: (
    <>
      {lodges.map((lodge) => (
        <Thumbnail cover={lodge.cover} title={lodge.title} key={lodge.id} />
      ))}
    </>
  ),
};
