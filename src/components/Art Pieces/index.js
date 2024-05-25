import Image from "next/image";
import Link from "next/link";
import ArtPiecePreview from "../Art Piece Preview";

export default function ArtPieces({ pieces }) {
  console.log("pieces", pieces);
  return (
    <>
      {pieces.map((piece, index) => (
        <ul key="index" style="list-style-type : none">
          <Link href={`./art-pieces/${piece.slug}`}>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              width={piece.dimensions.width}
              height={piece.dimensions.height}
            />
          </Link>
        </ul>
      ))}
    </>
  );
}
