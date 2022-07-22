import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeroComponent from '@/components/Hero';

export default {
  title: 'components/Hero',
  component: HeroComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <>
        <h4 className="text-gray-4">
          You can resize the component to view how it responds
        </h4>
        {Story()}
      </>
    ),
  ],
} as ComponentMeta<typeof HeroComponent>;

const Template: ComponentStory<typeof HeroComponent> = (args) => (
  <HeroComponent
    {...args}
    style={{
      resize: 'horizontal',
      overflow: 'hidden',
    }}
  />
);

export const Hero = Template.bind({});
Hero.args = {
  heading: (
    <span className="no-break">
      Chez vous, <br className="rwd-break" />
      partout et ailleurs
    </span>
  ),
  className: '',
  compact: false,
  background: 'mountain',
};
