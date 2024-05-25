import Image from "next/image";
export default function ArtPiecePreview({
  image,
  title,
  artist,
  width,
  height,
}) {
  return (
    <>
      <h>{title}</h>
      <Image
        alt={title}
        src={image}
        width={width / 4}
        height={height / 4}
      ></Image>
      <p>{artist}</p>
    </>
  );
}
