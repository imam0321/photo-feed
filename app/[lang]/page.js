import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <h1>Photo Feed</h1>
      <p>{dictionary.followers}</p>
    </>
  );
}
