import heartIconFilled from "./heart-filled.png";
import heartIconUnfilled from "./heart.png";
import Image from "next/image";

export default function FavoriteButton({ onClick, isFavorite }) {
  return (
    <button type="button" onClick={onClick} className="favorite-button">
      {isFavorite ? (
        <Image
          src={heartIconFilled}
          alt="Filled Heart"
          width={24}
          height={24}
          data-testid="filled-heart"
        />
      ) : (
        <Image
          src={heartIconUnfilled}
          alt="Heart"
          width={24}
          height={24}
          data-testid="heart"
        />
      )}
    </button>
  );
}
