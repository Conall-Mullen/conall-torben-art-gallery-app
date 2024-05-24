import { useRouter } from "next/router";

import Image from "next/image";

export default function PieceDetail({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const currentPiece = pieces.find((piece) => piece.slug === slug);

  const { name, image } = currentPiece;
  console.log(currentPiece);

  return (
    <>
      <h1>
        {currentPiece.name} by {currentPiece.artist}
      </h1>

      <Image
        src={currentPiece.imageSource}
        alt={currentPiece.name}
        width={currentPiece.dimensions.width / 4}
        height={currentPiece.dimensions.height / 4}
      ></Image>

    </>
  );
}
