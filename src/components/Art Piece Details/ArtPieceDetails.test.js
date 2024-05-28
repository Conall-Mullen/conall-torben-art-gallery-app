import { render, screen } from "@testing-library/react";
import { ArtPieceDetails } from ".";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../Favorite Button";

test("render an image and it's information", () => {
  render(
    <>
      <Image
        src={"/../../assets/test.jpg"}
        artist={"Leonardo DaVinci"}
        alt={"Mona Lisa"}
        year={"1503"}
        genre={"portrait"}
        height={2432}
        width={1920}
      />
      <button type="button">
        <Link href={`/art-pieces/`}>{"<"}</Link>
      </button>
    </>
  );

  const artPieceDetailsImage = screen.getByRole("img", {
    imageSource: "/../../assets/test.jpg",
  });
  const artPieceDetailsTitle = screen.getByRole("img", {});
  const artPieceDetailsArtist = screen.getByRole("img", {
    artist: "Leonardo DaVinci",
  });
  const artPieceDetailsYear = screen.getByRole("img", {
    year: "1503",
  });
  const artPieceDetailsGenre = screen.getByRole("img", {
    genre: "portrait",
  });
  const backButton = screen.getByRole("button", { type: "button" });
  expect(artPieceDetailsImage).toBeInTheDocument();
  expect(artPieceDetailsTitle).toBeInTheDocument();
  expect(artPieceDetailsArtist).toBeInTheDocument();
  expect(artPieceDetailsYear).toBeInTheDocument();
  expect(artPieceDetailsGenre).toBeInTheDocument();
  expect(backButton).toBeInTheDocument();
});

test("renders the FavoriteButton", () => {
  render(<FavoriteButton />);
  const favoriteButton = screen.getByRole("button");
  expect(favoriteButton).toBeInTheDocument();
});
