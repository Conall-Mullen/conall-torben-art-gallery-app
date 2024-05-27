import { useState, useEffect } from "react";
import HomePage from ".";
import useSWR from "swr";
import Layout from "../components/Layout";
import ArtPieces from "../components/Art Pieces";
import { Immer } from "immer";
import { useImmer } from "use-immer";

const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const [artPieces, setArtPieces] = useState([]);
  const [artPiecesInfo, setArtPiecesInfo] = useImmer([]);

  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");

      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };

  const { data, isLoading, error } = useSWR(URL, fetcher);

  console.log(artPieces);

  useEffect(() => {
    if (data) {
      setArtPieces(data);
      setArtPiecesInfo(
        artPieces.map((artPiece) => ({
          name: artPiece.slug,
          isFavourite: false,
        }))
      );
    }
  }, [data]);

  console.log("info", artPiecesInfo);
  return (
    <>
      {/* if the array is filled with data then return the componenets and drill the props if not return a loading screen */}
      {artPieces.length > 0 ? (
        <>
          <Component
            {...pageProps}
            pieces={artPieces}
            piecesInfo={artPiecesInfo}
          />
          <Layout pieces={artPieces} piecesInfo={artPiecesInfo} />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
