import { render } from '@testing-library/react';

import Code from './code';

describe('Code', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Code />);
    expect(baseElement).toBeTruthy();
  });
});
