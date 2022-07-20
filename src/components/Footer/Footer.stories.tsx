import { ComponentStory, ComponentMeta } from '@storybook/react';

import FooterComponent from '@/components/Footer';

export default {
  title: 'Footer',
  component: FooterComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
} as ComponentMeta<typeof FooterComponent>;

const Template: ComponentStory<typeof FooterComponent> = (args) => (
  <FooterComponent {...args} />
);

export const Footer = Template.bind({});
Footer.args = {
  className: '',
};
