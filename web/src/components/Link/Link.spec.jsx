import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Link from '.';

describe('<Link />', () => {
  it('should render a link', () => {
    render(<Link href="http://localhost/users/">children</Link>);
  });

  it('should render open in a new tab', () => {
    render(
      <Link href="http://localhost/users/" newTab>
        children
      </Link>,
    );
    expect(screen.getByRole('link', { name: 'children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });
});
