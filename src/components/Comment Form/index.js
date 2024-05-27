import { useRouter } from "next/router";
import ArtPieces from "../Art Pieces";
import ArtPiecePreview from "../Art Piece Preview";
import Image from "next/image";
import Link from "next/link";

export default function CommentForm({ piecesInfo }) {
  return (
    <>
      <label htmlFor="comment form">Comments: </label>
      <form name="comment form"></form>
    </>
  );
}
