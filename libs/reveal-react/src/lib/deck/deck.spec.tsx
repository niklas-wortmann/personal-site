import { render } from '@testing-library/react';

import Deck from './deck';

describe('Deck', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Deck />);
    expect(baseElement).toBeTruthy();
  });
});
