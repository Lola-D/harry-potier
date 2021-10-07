import { render, screen } from '@testing-library/react';

import App from './App';

test('renders Book Shop', () => {
  render(
    <App />
  );
  const textElement = screen.getByText('Book Shop');
  expect(textElement).toBeInTheDocument();
});

test('renders cart link', () => {
  render(
    <App />
  );
  const textElement = screen.getByText('Panier');
  expect(textElement).toBeInTheDocument();
});

test('renders input label', () => {
  render(
    <App />
  );
  const textElement = screen.getByText('Rechercher par titre :');
  expect(textElement).toBeInTheDocument();
});

test('renders no filtered books message', () => {
  render(
    <App />
  );
  const textElement = screen.getByText('Pas de résultat.');
  expect(textElement).toBeInTheDocument();
});