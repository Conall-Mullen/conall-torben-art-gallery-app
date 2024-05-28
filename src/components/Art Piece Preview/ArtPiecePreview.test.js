import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "../Art Piece Preview";
import Image from "next/image";
import FavoriteButton from "../Favorite Button";

test("renders the art pieces' image", () => {
  render(
    <>
      {" "}
      <Image
        alt={"Orange Red and Green Abstract Painting"}
        src={
          "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
        }
        width={2432 / 4}
        height={1920 / 4}
      ></Image>
    </>
  );
  const artPieceImage = screen.getByAltText(
    "Orange Red and Green Abstract Painting"
  );
  expect(artPieceImage).toBeInTheDocument();
});

test("renders the art pieces' title", () => {
  render(
    <>
      {" "}
      <h3>{"Orange Red and Green Abstract Painting"}</h3>
    </>
  );
  const artPieceTitle = screen.getByText(
    "Orange Red and Green Abstract Painting"
  );
  expect(artPieceTitle).toBeInTheDocument();
});

test("renders the art pieces' artist", () => {
  render(
    <>
      <p>{"Steve Johnson"}</p>
    </>
  );
  const artPieceArtist = screen.getByText("Steve Johnson");
  expect(artPieceArtist).toBeInTheDocument();
});

test("renders the FavoriteButton", () => {
  render(<FavoriteButton />);
  const favoriteButton = screen.getByRole("button");
  expect(favoriteButton).toBeInTheDocument();
});
