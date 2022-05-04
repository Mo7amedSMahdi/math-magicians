import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../calculator/Calculator';

describe('Calculator component test', () => {
  test('Renders', () => {
    const calculator = render(<Calculator />);

    expect(calculator).toMatchSnapshot();
  });

  test('Checks if Calculator page is there by checking the title', () => {
    render(<Calculator />);

    expect(
      screen.getByRole('heading', { name: /Lets do math!/i }),
    ).toBeInTheDocument();
  });
});
