import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Equity Risk Tool', () => {
  render(<App />);
  const linkElement = screen.getByText(/Equity Risk Tool/i);
  expect(linkElement).toBeInTheDocument();
});
