import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Repositories from '.';
import repositoriesPropsMock from './mock';

const props = repositoriesPropsMock;

describe('<Repositories />', () => {
  it('should render Repositories correctly', () => {
    render(<Repositories {...props} />);

    expect(screen.getAllByRole('heading', { name: 'Titulo' })).toHaveLength(3);
  });
});
