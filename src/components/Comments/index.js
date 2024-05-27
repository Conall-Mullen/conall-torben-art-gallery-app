import { useRouter } from "next/router";
import ArtPieces from "../Art Pieces";
import ArtPiecePreview from "../Art Piece Preview";
import Image from "next/image";
import Link from "next/link";

export default function Comments({ comments }) {
  console.log("comments", comments);
  return (
    <>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </>
  );
}
