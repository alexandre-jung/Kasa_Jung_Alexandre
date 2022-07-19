import { ComponentStory, ComponentMeta } from '@storybook/react';

import LogoComponent from '@/components/Logo';

// To import scss modules in stories resolves
// the compile order issue in Storybook.
import '@scss/main.scss';

export default {
  title: 'Logo',
  component: LogoComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof LogoComponent>;

const Template: ComponentStory<typeof LogoComponent> = (args) => (
  <LogoComponent {...args} />
);

export const Logo = Template.bind({});
Logo.args = {
  className: 'text-white',
};
