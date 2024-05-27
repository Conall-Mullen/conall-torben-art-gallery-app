import { useRouter } from "next/router";
import ArtPieces from "../Art Pieces";
import ArtPiecePreview from "../Art Piece Preview";
import Image from "next/image";
import Link from "next/link";

export default function CommentForm({ piecesInfo, onSubmitComment, slug }) {
  return (
    <>
      <form
        onSubmit={() => {
          onSubmitComment(event.target.elements[0].value, slug);
        }}
      >
        <label htmlFor="comment form">Leave a comment: </label>
        <input type="text" name="comment form"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
