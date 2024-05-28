import ArtPieces from "@/src/components/Art Pieces";

export default function ArtPiecesPage({
  pieces,
  piecesInfo,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <>
      <h1>ART GALLERY APP</h1>
      <ArtPieces
        pieces={pieces}
        piecesInfo={piecesInfo}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
    </>
  );
}
