import { render } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('App.js test', () => {
  test('Renders', () => {
    const app = render(<App />);

    expect(app).toMatchSnapshot();
  });
});
