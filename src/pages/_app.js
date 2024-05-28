import { useState, useEffect } from "react";
import HomePage from ".";
import useSWR from "swr";
import Layout from "../components/Layout";
import ArtPieces from "../components/Art Pieces";

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
    if (data) {
      setArtPieces(data);
    }
  }, [data]);

  const handleSubmitComment = (event, slug) => {
    event.preventDefault();

    const newComment = event.target.elements[0].value;

    // Find the index of the object with the matching slug
    const index = artPiecesInfo.findIndex((piece) => piece.name === slug);

    if (index !== -1) {
      // Object found, update its comments
      setArtPiecesInfo((prevState) => {
        const updatedInfo = [...prevState];
        updatedInfo[index] = {
          ...updatedInfo[index],
          comment: [...updatedInfo[index].comment, newComment],
        };
        return updatedInfo;
      });
    } else {
      // Object not found, create a new one
      setArtPiecesInfo((prevState) => [
        ...prevState,
        {
          name: slug,
          isFavourite: false,
          comment: [newComment],
        },
      ]);
    }
  };

  return (
    <>
      {/* if the array is filled with data then return the componenets and drill the props if not return a loading screen */}
      {artPieces.length > 0 ? (
        <>
          <Component
            {...pageProps}
            pieces={artPieces}
            piecesInfo={artPiecesInfo}
            onSubmitComment={handleSubmitComment}
          />
          <Layout pieces={artPieces} piecesInfo={artPiecesInfo} />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
