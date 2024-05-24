import Link from "next/link";
import Layout from "../Layout";
export default function Navigation({ pieces }) {
  console.log("pieces", pieces);
  return (
    <>

      ***
      <Link href={`./`}>Spotlight //</Link>
      <Link href={`./art-pieces`}> Art Pieces //</Link>
      <Link href={`./favourites`}> Favourites</Link>
      ***

    </>
  );
}
