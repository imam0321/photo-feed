import { PhotoList } from "@/components/PhotoList/PhotoList";

export default async function Home() {
  const response = await fetch(`${process.env.BASE_API_URL}/photos`);
  const photos = await response.json();

  return (
    <>
      <PhotoList photos={photos} />
    </>
  );
}
