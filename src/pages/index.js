import useSWR from "swr";
import ArtPieces from "../components/Art Pieces";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
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
  const pieces = data;

  if (isLoading) return <h1>is loading</h1>;

  return (
    <>
      <ArtPieces pieces={pieces} />
    </>
  );
}
