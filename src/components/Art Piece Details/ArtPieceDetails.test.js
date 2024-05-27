import { render, screen } from "@testing-library/react";
import { ArtPieceDetails } from ".";
import Image from "next/image";

test("render an image and it's information", () => {
  render(
    <>
      <Image
        src={"/../../assets/test.jpg"}
        artist={"Leonardo DaVinci"}
        alt={"Mona Lisa"}
        height={2432}
        width={1920}
      />
    </>
  );

  const artPieceDetailsImage = screen.getByRole("img", {
    imageSource: "/../../assets/test.jpg",
  });
  const artPieceDetailsTitle = screen.getByRole("img", {});
  const artPieceDetailsArtist = screen.getByRole("img", {
    artist: "Leonardo DaVinci",
  });
  expect(artPieceDetailsImage).toBeInTheDocument();
  expect(artPieceDetailsArtist).toBeInTheDocument();
});
