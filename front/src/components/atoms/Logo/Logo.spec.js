import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import Logo from './Logo.svelte';

test('Logo', () => {
  const { getByText } = render(Logo, {
    props: {
      alt: 'placeholder.alt',
      src: 'placeholder.src',
    },
  });

  // expect(getByText('placeholder.content')).toBeInTheDocument();
});
