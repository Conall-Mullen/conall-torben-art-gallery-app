import React from "react";
import Image from "next/image";

export default function Spotlight({ pieces }) {
  console.log("spotlight pieces", pieces);
  const thisPiece = pieces[Math.floor(Math.random() * pieces.length)];
  return (
    <>
      <Image
        src={thisPiece.imageSource}
        alt={thisPiece.genre}
        height={thisPiece.dimensions.height / 4}
        width={thisPiece.dimensions.width / 4}
      />
      <h3>{thisPiece.artist}</h3>
    </>
  );
}
