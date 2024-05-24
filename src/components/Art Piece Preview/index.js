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
      <label>{title}</label>
      <Image
        alt={title}
        src={image}
        width={width / 4}
        height={height / 4}
      ></Image>
      <label>{artist}</label>
    </>
  );
}
