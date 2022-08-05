import { ComponentStory, ComponentMeta } from '@storybook/react';

import DropdownComponent from '@components/Dropdown';
import { resizeDecorator, titleDecorator } from '@storybook/utils';

export default {
  title: 'components/Dropdown',
  component: DropdownComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  decorators: [
    resizeDecorator({ width: 400, resize: 'horizontal' }),
    titleDecorator('You can resize the dropdown to view how it responds'),
  ],
} as ComponentMeta<typeof DropdownComponent>;

const Template: ComponentStory<typeof DropdownComponent> = (args) => (
  <DropdownComponent {...args}>
    <ul className="list-unstyled fs-x-small" style={{ whiteSpace: 'nowrap' }}>
      <li className="fw-light">Climatisation</li>
      <li className="fw-light">Wi-Fi</li>
      <li className="fw-light">Cuisine</li>
      <li className="fw-light">Espace de travail</li>
      <li className="fw-light">Fer à repasser</li>
      <li className="fw-light">Sèche-cheveux</li>
      <li className="fw-light">Cintres</li>
    </ul>
  </DropdownComponent>
);

export const Dropdown = Template.bind({});
Dropdown.args = {
  label: 'Équipements',
  labelClassName: '',
};
