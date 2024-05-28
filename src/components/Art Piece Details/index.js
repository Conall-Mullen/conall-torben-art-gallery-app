import { useRouter } from "next/router";
import ArtPieces from "../Art Pieces";
import ArtPiecePreview from "../Art Piece Preview";
import Image from "next/image";
import Link from "next/link";
import CommentForm from "../Comment Form";
import FavoriteButton from "../Favorite Button";

export default function ArtPieceDetail({
  pieces,
  piecesInfo,
  onToggleFavorite,
  pieceSlug,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const currentPiece = pieces.find((piece) => piece.slug === slug);
  const isFavorite = piecesInfo.find((piece) => piece.name === slug)?.favorite;
  console.log("piecesInfo:::::::", piecesInfo);
  console.log("current piece", currentPiece);
  console.log("isFavoritee in detail", isFavorite);

  const { name, image } = currentPiece;

  return (
    <>
      <Image
        src={currentPiece.imageSource}
        alt={currentPiece.name}
        width={currentPiece.dimensions.width / 4}
        height={currentPiece.dimensions.height / 4}
      ></Image>
      <h1>{currentPiece.name}</h1>
      <h2>{currentPiece.artist}</h2>
      <h3>{currentPiece.year}</h3>
      <p>{currentPiece.genre}</p>
      <FavoriteButton
        onClick={() => onToggleFavorite(slug)}
        isFavorite={isFavorite}
      />
      <CommentForm />
      <button type="button">
        <Link href={`/art-pieces/`}>{"<"}</Link>
      </button>
    </>
  );
}
