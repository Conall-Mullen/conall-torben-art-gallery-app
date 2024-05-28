import Layout from "../components/Layout";
import Spotlight from "../components/Spotlight";

export default function SpotlightPage({
  pieces,
  piecesInfo,
  onToggleFavorite,
}) {
  const randomPiece = pieces[Math.floor(Math.random() * (pieces.length - 1))];
  const isFavorite = piecesInfo.find(
    (piece) => piece.name === randomPiece.slug
  )?.favorite;
  console.log("artPiecesInfo", piecesInfo);
  console.log("isFavorite????", isFavorite);
  return (
    <>
      <h1>ART GALLERY APP</h1>
      <Spotlight
        pieces={pieces}
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        height={randomPiece.dimensions.height}
        width={randomPiece.dimensions.width}
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(randomPiece.slug)}
      />
    </>
  );
}
