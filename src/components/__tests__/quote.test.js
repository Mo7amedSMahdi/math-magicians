import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../quote/Quote';

describe('Quote page test', () => {
  test('Renders', () => {
    const quote = render(<Quote />);

    expect(quote).toMatchSnapshot();
  });

  test('Checks if Quote page content is there by checking the page content', () => {
    render(<Quote />);
    expect(
      screen.getByText(/Mathmatic is not about numbers/i),
    ).toBeInTheDocument();
  });
});
