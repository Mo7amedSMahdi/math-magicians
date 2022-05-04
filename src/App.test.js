import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App.js test', () => {
  test('Renders', () => {
    const app = render(<App />);

    expect(app).toMatchSnapshot();
  });
});
