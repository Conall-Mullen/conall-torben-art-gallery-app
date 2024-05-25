import { render, screen } from "@testing-library/react";
import Spotlight from ".";
import Image from "next/image";

test("render a movie", () => {
  render(
    <>
      <Image
        src={"/../../assets/test.jpg"}
        alt={"Mona Lisa"}
        height={2432}
        width={1920}
      />
    </>
  );

  const spotlightImage = screen.getByRole("img", {
    imageSource: "/../../assets/test.jpg",
  });
  expect(spotlightImage).toBeInTheDocument();
});
