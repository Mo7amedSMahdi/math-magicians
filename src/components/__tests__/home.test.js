import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../home/Home';

describe('Home page test', () => {
  test('Renders', () => {
    const home = render(<Home />);

    expect(home).toMatchSnapshot();
  });

  test('Checks if home page content is there by checking the title', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', { name: /Welcome to our page!/i }),
    ).toBeInTheDocument();
  });
});
