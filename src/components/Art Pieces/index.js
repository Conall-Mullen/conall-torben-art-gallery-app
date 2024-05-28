import Image from "next/image";
import Link from "next/link";
import ArtPiecePreview from "../Art Piece Preview";
import Spotlight from "../Spotlight";
import FavoriteButton from "../Favorite Button";

export default function ArtPieces({
  pieces,
  piecesInfo,
  onToggleFavorite,
  isFavorite,
  onSubmitComment,
}) {
  return (
    <>
      {pieces.map((piece, index) => (
        <ul key={index} className="art-piece-preview">
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            width={piece.dimensions.width}
            height={piece.dimensions.height}
            pieceSlug={piece.slug}
            onToggleFavorite={onToggleFavorite}
            pieces={pieces}
            isFavorite={isFavorite}
            piecesInfo={piecesInfo}
          />
          <Link href={`./art-pieces/${piece.slug}`}>more info</Link>
        </ul>
      ))}
    </>
  );
}
