import Link from "next/link";
import Layout from "../Layout";
export default function Navigation({ pieces }) {
  console.log("pieces", pieces);
  return (
    <>
      <h2>Pieces</h2>
      <ul>
        {pieces.map(({ slug, name, index, artist }) => (
          <li key={index}>
            <Link href={`./art-pieces/${slug}`}>
              {name} by {artist}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
