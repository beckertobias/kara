import React from 'react';
import { render, screen } from '@testing-library/react';

import Loading from './Loading';
describe('Loading', () => {
  it('renders Loading', () => {
    render(<Loading />);
    expect(screen.getByText('Loading works!')).not.toBe(null);
  });
});
