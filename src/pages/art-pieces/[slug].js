import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";
import ArtPieceDetail from "@/src/components/Art Piece Details";

export default function PieceDetail({ pieces }) {
  return (
    <>
      <ArtPieceDetail pieces={pieces} />
    </>
  );
}
