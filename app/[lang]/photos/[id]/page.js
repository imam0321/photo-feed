import { PhotoDetails } from "@/components/PhotoDetails/PhotoDetails";

export default function PhotoDetailsPage({ params: { id, lang } }) {
  return <PhotoDetails id={id} lang={lang} />;
}
