import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchInput from '.';

describe('<SearchInput />', () => {
  it('should render a link', () => {
    const fn = jest.fn();
    render(<SearchInput handleChange={fn} searchValue={'Github'}/>);

    const input = screen.getByPlaceholderText(/Digite o username ou login/i);
    expect(input.value).toBe('Github');

  });
});