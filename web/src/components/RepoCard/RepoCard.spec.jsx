import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RepoCard from '.';
import repoCardPropsMock from './mock';

const props = repoCardPropsMock;

describe('<RepoCard />', () => {
  it('should render RepoCard correctly', () => {
    render(<RepoCard {...props} />);
  });

  it('should render Headings correctly', () => {
    render(<RepoCard {...props} />);

    expect(screen.getByRole('heading', { level: 2 }, { name: /Sobre/i })).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 3 }, { name: /Estrelas: 100/i })).toBeInTheDocument();
  });
});
