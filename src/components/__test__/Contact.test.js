import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

test("Should Load Contact Us Page", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
