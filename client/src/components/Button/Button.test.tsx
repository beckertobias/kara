import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';
describe('Button', () => {
  it('renders Button', () => {
    render(<Button />);
    //expect(screen.getByText('Button works!')).not.toBe(null);
  });
});
