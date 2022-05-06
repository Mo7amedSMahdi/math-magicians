import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../navBar/Nav';

describe('NavBar test', () => {
  test('Render', () => {
    const nav = render(
      <Router>
        <Nav />
      </Router>,
    );
    expect(nav).toMatchSnapshot();
  });

  test('Checks if Nav component is there by checking the title', () => {
    render(
      <Router>
        <Nav />
      </Router>,
    );

    expect(
      screen.getByRole('heading', { name: /Math Magicians/i }),
    ).toBeInTheDocument();
  });
});
