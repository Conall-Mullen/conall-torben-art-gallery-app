import heartIconFilled from "./heart-filled.png";
import heartIconUnfilled from "./heart.png";
import Image from "next/image";

export default function FavoriteButton({ onClick, isFavorite }) {
  // const imageSrc = isFavorite ? heartIconFilled : heartIconUnfilled;
  // const imageSrc = isFavorite
  //   ? "/216238_heart_icon.png"
  //   : "/216236_heart_icon.png";
  console.log("ISFAVORTIE??"), isFavorite;
  return (
    <button type="button" onClick={onClick}>
      {isFavorite ? (
        <Image
          src={heartIconFilled}
          alt="Filled Heart"
          width={24}
          height={24}
        />
      ) : (
        <Image src={heartIconUnfilled} alt="Heart" width={24} height={24} />
      )}
    </button>
  );
}
