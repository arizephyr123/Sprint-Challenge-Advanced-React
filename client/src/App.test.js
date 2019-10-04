import React from 'react';
;
import { render } from "@testing-library/react"
import App from './App';
import { formatRank } from "./Components/DisplayedList";

it('renders without crashing', () => {
  render(<App/>)
}); 

test ('DarkMode button is found', () =>{
  const { getByText } = render(<App/>);
  getByText(/dark mode/i);
});

test ('Rank column header is found', () =>{
  const { getByText } = render(<App/>);
  getByText(/rank/i);
});

test ('Name column header is found', () =>{
  const { getByText } = render(<App/>);
  getByText(/name/i);
});

test ('Country column header is found', () =>{
  const { getByText } = render(<App/>);
  getByText(/country/i);
});

test ('Searches column header is found', () =>{
  const { getByText } = render(<App/>);
  getByText(/searches/i);
});

test ('formatRank adds 1 to the id of player rank', () => {
  let actual;
  let expected;
  actual = formatRank(22);
  expected = 23;
  expect(actual).toBe(expected);
  expect(actual).not.toBe(0);
});

test ('first value in Rank column is always 1', () => {
  const { getByTestId} = render(<App/>);
  getByTestId('rankFirstValue');
  let actual;
  let expected;
  actual = formatRank(0);
  expected = 1;
  expect(actual).toBe(expected);
  expect(actual).not.toBe(0);
});

//==========================
//below for reference
test ('first value in Rank column is 1', () =>{
  const { getByTestId} = render(<App/>);
  getByTestId('strikeHeader');
});

test ('formatRank adds 1 to the id of player rank', () => {
  let actual;
  let expected;
  actual = formatRank(0);
  expected = 1;
  expect(actual).toBe(expected);
  expect(actual).not.toBe(0);
});





