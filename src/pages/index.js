import Layout from "../components/Layout";
import Spotlight from "../components/Spotlight";

export default function HomePage({ pieces }) {

  return (
    <>
      <Layout pieces={pieces} />
      <Spotlight pieces={pieces} />
    </>
  );

}
