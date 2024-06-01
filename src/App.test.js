import { render, screen } from '@testing-library/react';
import App from './App';

// Define a test case for the App component
test('renders learn react link', () => {
  // Render the App component
  render(<App />);

  // Search for an element that contains the text 'learn react', case-insensitive
  const linkElement = screen.getByText(/learn react/i);

  // Assert that the element is present in the document
  expect(linkElement).toBeInTheDocument();
});
