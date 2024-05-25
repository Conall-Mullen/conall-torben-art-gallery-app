import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "../Art Piece Preview";

test("renders a list of art pieces", () => {
  render(
    <ul>
      <ArtPiecePreview />
    </ul>
  );
  const artPieceList = screen.getByRole("list");
  expect(artPieceList).toBeInTheDocument();
});
