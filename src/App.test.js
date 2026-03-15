// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FlatbuffersJs title', () => {
    render(<App />);
    const titleElement = screen.getByText(/FlatbuffersJs/i);
    expect(titleElement).toBeInTheDocument();
});
