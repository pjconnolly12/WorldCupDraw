import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

let players = [
  'Pat',
  'Gaz',
  'Beavis',
  'Geo',
  'Eric',
  'Adam',
  'SeanBeav',
  'JayD',
  'Margaret',
  'Drew',
  'Rob',
  'Lyndsie',
  'Shannon',
  'Sean',
  'Ashley',
  'Ethan',
];

const playerPick = require('./index');
test('select a random player from player list', () => {
  expect(playerPick()).toBe();
});
