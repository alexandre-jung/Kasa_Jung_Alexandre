import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DetailComponent from '@views/Detail';
import routes from '@routes';

export default {
  title: 'views/Detail',
  component: DetailComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  decorators: [
    (story) => (
      <MemoryRouter initialEntries={[routes.lodge('b9123946')]}>
        <Routes>
          <Route path={routes.lodge()} element={story()} />
        </Routes>
      </MemoryRouter>
    ),
    (story) => <div style={{ maxWidth: '1200px' }}>{story()}</div>,
  ],
} as ComponentMeta<typeof DetailComponent>;

const Template: ComponentStory<typeof DetailComponent> = () => (
  <DetailComponent />
);

export const Detail = Template.bind({});
