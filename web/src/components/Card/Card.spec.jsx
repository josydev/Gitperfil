import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from '.';
import cardPropsMock from './mock';

const props = cardPropsMock;

describe('<Card />', () => {
  it('should render Card correctly', () => {
    render(<Card {...props} />);
  });

  it('should render Headings and paragraphs', () => {
    render(<Card {...props} />);

    expect(screen.getByRole('heading', { name: 'Josyane T' })).toBeInTheDocument();
  });

  it('should render image with an alt', () => {
    render(<Card {...props} />);
    expect(screen.getByAltText(/Imagem do usuário/i)).toHaveAttribute('src', 'https://uybor.uz/borless/uybor/img/user-images/user_no_photo_100x100.png');
  });

  it('should render open in a new tab', () => {
    render(<Card {...props} />);

    expect(screen.getByRole('link', { name: 'Mais Informações' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });
});
