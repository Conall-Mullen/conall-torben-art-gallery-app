import ArtPieces from "@/src/components/Art Pieces";

export default function ArtPiecesPage({
  pieces,
  piecesInfo,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <>
      <ArtPieces
        pieces={pieces}
        piecesInfo={piecesInfo}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
    </>
  );
}
