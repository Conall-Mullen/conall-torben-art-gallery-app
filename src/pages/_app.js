import { useState } from "react";
import HomePage from ".";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const [artPieces, setArtPieces] = useState([]);

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

  if (isLoading) return <h1>Loading...</h1>;
  // setArtPieces(data);
  return (
    <>
      <Component {...pageProps} pieces={data} />
    </>
  );
}
