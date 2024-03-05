import { render, screen } from '@testing-library/react';
import LoginPage from '../pages/Login';

describe('App', () => {
  test('renders login page', () => {
    window.history.pushState({}, 'login', '/login');
    render(<LoginPage />);
    expect(screen.getByText('SIGN IN')).toBeTruthy();
  });
});