import { useRouter } from "next/router";

export default function PieceDetail() {
  const router = useRouter();
  const { slug } = router.query;

  //   const currentPiece = pieces.find((piece) => piece.slug === slug);

  //   const { name, image } = currentPiece;
  //   console.log(currentPiece);

  return (
    <>
      <h1>Hello</h1>

      {/* <Image
        src={cover}
        alt={title}
        width={width / 4}
        height={height / 4}
      ></Image> */}
    </>
  );
}
