import React from 'react';
import { render, screen } from '@testing-library/react';
import QueenListContainer from './QueenListContainer';
import { MemoryRouter } from 'react-router-dom';


describe('QueenListContainer', () => {
  it('renders a list of Drag Queens from Ru Paul to the page', async () => {
    render(<MemoryRouter><QueenListContainer/></MemoryRouter>);

    screen.findByRole('img', { name: 'loading' });

    const ul = await screen.findByRole('list', { name: 'drag queens' });
    expect(ul).not.toBeEmptyDOMElement();
  });
});
