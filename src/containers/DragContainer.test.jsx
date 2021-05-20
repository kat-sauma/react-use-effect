import React from 'react';
import { render, screen } from '@testing-library/react';
import DragContainer from './DragContainer';

describe('DragContainer', () => {
  it('renders a list of Drag Queens from Ru Paul to the page', () => {
    render(<DragContainer/>);

    screen.findByRole('img', { name: 'loading' });

  });
});
