import { render, screen } from "@testing-library/react";
import Spotlight from ".";
import Image from "next/image";

test("render a movie", () => {
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

  const spotlightImage = screen.getByRole("img", {
    imageSource: "/../../assets/test.jpg",
  });
  const spotlightArtist = screen.getByRole("img", {
    artist: "Leonardo DaVinci",
  });
  expect(spotlightImage).toBeInTheDocument();
  expect(spotlightArtist).toBeInTheDocument();
});
