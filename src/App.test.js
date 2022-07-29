import { render, screen } from '@testing-library/react';
import App from './App';

test('renders React boilerplate header', () => {
  render(<App />);
  const linkElement = screen.getByText(/React boilerplate/i);
  expect(linkElement).toBeInTheDocument();
});
