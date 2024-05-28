import { useRouter } from "next/router";
import ArtPieces from "../Art Pieces";
import ArtPiecePreview from "../Art Piece Preview";
import Image from "next/image";
import Link from "next/link";

export default function CommentForm({ piecesInfo, onSubmitComment, slug }) {
  return (
    <>
      <form
        className="comment-form"
        onSubmit={() => {
          onSubmitComment(event, slug);
        }}
      >
        <label htmlFor="comment form">Leave a comment: </label>
        <input
          type="text"
          name="comment form"
          className="comment-form_input"
        ></input>
        <button type="submit" className="comment-form_submit-button">
          Submit
        </button>
      </form>
    </>
  );
}
