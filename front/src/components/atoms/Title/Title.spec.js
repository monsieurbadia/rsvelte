import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import Title from './Title.svelte';

test('Title', () => {
  const { getByText } = render(Title, {
    props: {
      content: 'title.content',
    },
  });

  expect(getByText('title.content')).toBeInTheDocument();
});
