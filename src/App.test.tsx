import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react app', () => {
  render(<App />);
  const homeLink = screen.getByText('Home');
  const contactLink = screen.getByText('Contact Us');
  expect(homeLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});
