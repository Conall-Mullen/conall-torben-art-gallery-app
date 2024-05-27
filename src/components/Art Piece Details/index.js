import { useRouter } from "next/router";
import ArtPieces from "../Art Pieces";
import ArtPiecePreview from "../Art Piece Preview";
import Image from "next/image";
import Link from "next/link";
import CommentForm from "../Comment Form";

export default function ArtPieceDetail({ pieces, onSubmitComment }) {
  console.log("pieces from details", pieces);
  const router = useRouter();
  console.log("Router", router);
  const { slug } = router.query;
  console.log("slug", slug);

  const currentPiece = pieces.find((piece) => piece.slug === slug);
  console.log("current piece", currentPiece);

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
      <button type="button">
        <Link href={`/art-pieces/`}>{"<"}</Link>
      </button>
    </>
  );
}
