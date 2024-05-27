import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";
import ArtPieceDetail from "@/src/components/Art Piece Details";

export default function PieceDetail({ pieces, onSubmitComment, piecesInfo }) {
  return (
    <>
      <ArtPieceDetail
        pieces={pieces}
        onSubmitComment={onSubmitComment}
        piecesInfo={piecesInfo}
      />
    </>
  );
}
