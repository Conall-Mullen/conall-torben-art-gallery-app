import FavoriteButton from ".";
import { render, screen } from "@testing-library/react";

test("renders the FavoriteButton", () => {
  render(<FavoriteButton />);
  const favoriteButton = screen.getByRole("button");
  expect(favoriteButton).toBeInTheDocument();
});
