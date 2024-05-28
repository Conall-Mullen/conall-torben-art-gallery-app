import { useRouter } from "next/router";
import ArtPieces from "../Art Pieces";
import ArtPiecePreview from "../Art Piece Preview";
import Image from "next/image";
import Link from "next/link";
import CommentForm from "../Comment Form";

import FavoriteButton from "../Favorite Button";
import Comments from "../Comments";

export default function ArtPieceDetail({
  pieces,
  piecesInfo,
  onToggleFavorite,
  onSubmitComment,
  pieceSlug,
}) {
  const router = useRouter();

  const { slug } = router.query;

  const currentPiece = pieces.find((piece) => piece.slug === slug);

  const isFavorite = piecesInfo.find((piece) => piece.name === slug)?.favorite;
  console.log("isFavoritee in detail", isFavorite);

  const comments = piecesInfo?.find(
    (pieceInfo) => pieceInfo.name === slug
  )?.comment;

  return (
    <>
      <h1 className="art-piece-detail_heading">ART GALLERY APP</h1>
      <div className="art-piece-detail">
        <Image
          src={currentPiece.imageSource}
          alt={currentPiece.name}
          width={currentPiece.dimensions.width / 4}
          height={currentPiece.dimensions.height / 4}
        ></Image>
        <h1>
          {currentPiece.name} ({currentPiece.year})
        </h1>

        <p>
          {currentPiece.genre} by {currentPiece.artist}
        </p>
        <FavoriteButton
          onClick={() => onToggleFavorite(slug)}
          isFavorite={isFavorite}
          data-testid="button-element"
        />

        <CommentForm
          onSubmitComment={() => onSubmitComment(event, slug)}
          slug={currentPiece.slug}
        />
        {comments?.length > 0 ? <Comments comments={comments} /> : ""}

        <Link href={`/art-pieces/`}>{"back"}</Link>
      </div>
    </>
  );
}
