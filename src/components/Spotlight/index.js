import React from "react";
import Image from "next/image";
import FavoriteButton from "../Favorite Button";

export default function Spotlight({
  image,
  artist,
  height,
  width,
  piecesInfo,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <>
      <Image src={image} alt={artist} height={height / 4} width={width / 4} />
      <h3>{artist}</h3>
      <FavoriteButton
        piecesInfo={piecesInfo}
        isFavorite={isFavorite}
        onClick={onToggleFavorite}
        data-testid="button-element"
      />
    </>
  );
}
