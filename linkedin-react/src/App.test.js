import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders an h1', () => {
    const {getByText} = render(<App />);
    const h1 = getByText(/Hello React testing library/);
    expect(h1).toHaveTextContent('Hello React testing library');
});
// { getByText } is a query within the react testing library
//render() is used on the component being tested