import { useRouter } from "next/router";
import ArtPieces from "../Art Pieces";
import ArtPiecePreview from "../Art Piece Preview";
import Image from "next/image";
import Link from "next/link";
import CommentForm from "../Comment Form";
import Comments from "../Comments";

export default function ArtPieceDetail({
  pieces,
  onSubmitComment,
  piecesInfo,
}) {
  const router = useRouter();

  const { slug } = router.query;

  const currentPiece = pieces.find((piece) => piece.slug === slug);

  const comments = piecesInfo?.find(
    (pieceInfo) => pieceInfo.name === slug
  )?.comment;

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
      <CommentForm
        onSubmitComment={() => onSubmitComment(event, slug)}
        slug={currentPiece.slug}
      />
      {comments?.length > 0 ? <Comments comments={comments} /> : ""}
      <button type="button">
        <Link href={`/art-pieces/`}>{"<"}</Link>
      </button>
    </>
  );
}
