import { APIURL } from "@/lib/constants";
import WatchSlugClient from "../../../components/watch/VideoPlayerClient";
import { notFound } from "next/navigation";

export default async function WatchSlug({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const id_movie = slug;
    const src = `${APIURL}/watch/${id_movie}`;
    return <WatchSlugClient src={src} />;
  } catch (error) {
    return notFound();
  }
}