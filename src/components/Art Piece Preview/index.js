import Image from "next/image";
import FavoriteButton from "../Favorite Button";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  width,
  height,
  onToggleFavorite,
  pieceSlug,
  pieces,
  isFavorite,
}) {
  return (
    <>
      <h2>{title}</h2>
      <Image
        alt={title}
        src={image}
        width={width / 4}
        height={height / 4}
      ></Image>
      <p>{artist}</p>
      {/* <button type="button" onClick={() => onToggleFavorite(pieceSlug)}>
        test Favorite Button
      </button> */}

      <FavoriteButton
        isFavorite={isFavorite}
        pieceSlug={pieceSlug}
        onClick={() => onToggleFavorite(pieceSlug)}
        data-testid="button-element"
      />
    </>
  );
}
