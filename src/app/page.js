import Posts from "../components/Posts";
import Products from "../components/Products";

export default function Home() {
  return (
    <main className="tw-flex tw-flex-col tw-items-center ">
      <Products />
      <Posts />
    </main>
  );
}
