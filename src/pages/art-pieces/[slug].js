import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";
import ArtPieceDetail from "@/src/components/Art Piece Details";


export default function PieceDetail({
  pieces,
  onSubmitComment,
  piecesInfo,
  piecesInfo = { piecesInfo },
  onToggleFavorite
}) {

  return (
    <>
      <ArtPieceDetail
        pieces={pieces}

        onToggleFavorite={onToggleFavorite}

        onSubmitComment={onSubmitComment}

        piecesInfo={piecesInfo}
      />
    </>
  );
}
