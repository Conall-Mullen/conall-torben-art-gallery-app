import Link from "next/link";

export default function Navigation({ pieces }) {
  console.log("pieces", pieces);
  return (
    <footer className="nav-bar">
      <Link href={`./`} data-testid="link-spotlight">
        Spotlight //
      </Link>
      <Link href={`./art-pieces`} data-testid="link-art-pieces">
        {" "}
        Art Pieces //
      </Link>
      <Link href={`./favourites`} data-testid="link-favorites">
        {" "}
        Favourites //
      </Link>
    </footer>
  );
}
