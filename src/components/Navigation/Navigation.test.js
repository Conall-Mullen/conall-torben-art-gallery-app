import { render, screen } from "@testing-library/react";
import Navigation from "./index.js";

test("renders links to spotlight and art pieces", () => {
  render(<Navigation />);

  const spotlightLink = screen.getByTestId("link-spotlight");
  const artPiecesLink = screen.getByTestId("link-art-pieces");
  const favoritesLink = screen.getByTestId("link-favorites");

  expect(spotlightLink).toBeInTheDocument();
  expect(artPiecesLink).toBeInTheDocument();
  expect(favoritesLink).toBeInTheDocument();
});
