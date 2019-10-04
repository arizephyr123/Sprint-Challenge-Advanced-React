import React from 'react';
import { render } from "@testing-library/react"
import App from './App';
import { addOne } from "./Components/Dashboard";

it('renders without crashing', () => {
  render(<App/>)
}); 

test ('Strike header is found', () =>{
  const { getByTestId} = render(<App/>);
  getByTestId('strikeHeader');
});


test ('Hit button is found', () =>{
  const { getByText } = render(<App/>);
  getByText(/hit/i);
});

test ('addOne adds 1 point to the current value', () => {
  let actual;
  let expected;
  actual = addOne(0);
  expected = 1;
  expect(actual).toBe(expected);
  expect(actual).not.toBe(0);
});




