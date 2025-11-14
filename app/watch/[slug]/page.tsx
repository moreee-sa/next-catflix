import { APIURL } from "@/lib/constants";
import WatchSlugClient from "../../../components/watch/VideoPlayerClient";
import { notFound } from "next/navigation";
import '@fontsource/prompt/500.css';
import '@fontsource-variable/montserrat';

export default async function WatchSlug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const id_movie = slug;
  const src = `${APIURL}/watch/${id_movie}`;

  return <WatchSlugClient src={src} />;
}