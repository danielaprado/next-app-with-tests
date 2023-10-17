import Home from "@/app/page";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("should have Docs text", () => {
  render(<Home />); //Arrange the test

  const myElem = screen.getByText("Docs"); //Take an action

  expect(myElem).toContain("Docs"); //Assert
});
