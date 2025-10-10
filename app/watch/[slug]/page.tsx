import { APIURL } from "@/lib/constants";
import WatchSlugClient from "./WatchSlugClient";
import { notFound } from "next/navigation";

interface WatchSlugParams {
  params: { slug: string };
}

export default async function WatchSlug({ params }: WatchSlugParams) {
  try {
    const { slug } = await params;
    const id_movie = slug;

    const src = `${APIURL}/watch/${id_movie}`

    return <WatchSlugClient src={src} />;

  } catch (error) {
    return notFound();
  }
}