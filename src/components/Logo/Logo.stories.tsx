import { ComponentStory, ComponentMeta } from '@storybook/react';

import LogoComponent from '@/components/Logo';

export default {
  title: 'components/Logo',
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
  className: '',
};
