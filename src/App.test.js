import "@testing-library/jest-dom/extend-expect";

import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";
import React from "react";

test("renders Weather App heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/weather app/i);
  expect(headingElement).toBeInTheDocument();
});

test("renders input field and search button", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/enter city name/i);
  const buttonElement = screen.getByText(/search/i);

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test("displays error when no city is entered", () => {
  render(<App />);
  const buttonElement = screen.getByText(/search/i);
  fireEvent.click(buttonElement);

  const errorElement = screen.getByText(/please enter a city name/i);
  expect(errorElement).toBeInTheDocument();
});
