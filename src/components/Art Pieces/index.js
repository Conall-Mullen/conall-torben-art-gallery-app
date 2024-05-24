import Image from "next/image";
import ArtPiecePreview from "../Art Piece Preview";

export default function ArtPieces({ pieces }) {
  console.log("pieces", pieces);
  return (
    <>
      {pieces.map((piece, index) => (
        <div key="index">
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.title}
            artist={piece.artist}
            width={piece.dimensions.width}
            height={piece.dimensions.height}
          />
        </div>
      ))}
    </>
  );
}
