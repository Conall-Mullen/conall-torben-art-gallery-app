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
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

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

  useEffect(() => {
    // Conall: do we still need this?
    if (data) {
      setArtPieces(data);
      // setArtPiecesInfo(
      //   artPieces.map((artPiece) => ({
      //     name: artPiece.slug,
      //     isFavourite: false,
      //     comments: [""],
      //   }))
      // );
    }
  }, [data]);

  function handleToggleFavorite(slug) {
    const index = artPiecesInfo.findIndex((piece) => piece.name === slug);
    console.log("toggling");
    if (index !== -1) {
      // Object found, update its comments
      setArtPiecesInfo((prevState) => {
        const updatedInfo = [...prevState];
        updatedInfo[index] = {
          ...updatedInfo[index],
          favorite: !updatedInfo[index].favorite,
        };
        return updatedInfo;
      });
    } else {
      // Object not found, create a new one
      setArtPiecesInfo([
        ...artPiecesInfo,
        {
          name: slug,
          favorite: true,
        },
      ]);
    }
  }

  return (
    <>
      {/* if the array is filled with data then return the componenets and drill the props if not return a loading screen */}
      {artPieces.length > 0 ? (
        <>
          <Component
            {...pageProps}
            pieces={artPieces}
            piecesInfo={artPiecesInfo}
            onToggleFavorite={handleToggleFavorite}
          />
          <Layout pieces={artPieces} piecesInfo={artPiecesInfo} />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
