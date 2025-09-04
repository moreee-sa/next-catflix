import { APIURL } from "@/lib/constants";
import WatchSlugClient from "./WatchSlugClient";

export default async function WatchSlug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const id_movie = slug;

  return (
    <WatchSlugClient src={`${APIURL}/watch/${id_movie}`} />
  );
}