import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailContainer from './DetailContainer';
import { MemoryRouter } from 'react-router-dom';

describe('DetailContainer', () => {
  it('renders details of queens to the page', async () => {
    render(<MemoryRouter><DetailContainer match={{ 
      params: { 
        id: 1
      }
    }}/></MemoryRouter>);

    const spinner = await screen.findByRole('spinner', { name: 'loading spinner' });

    expect(spinner).toMatchSnapshot();
  });
});
