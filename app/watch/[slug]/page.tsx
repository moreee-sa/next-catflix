import { APIURL } from "@/lib/constants";
import WatchSlugClient from "./WatchSlugClient";
import { notFound } from "next/navigation";

export default async function WatchSlug({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const id_movie = slug;

    const res = await fetch(`${APIURL}/watch/${id_movie}`, { cache: "no-store" });

    if (!res.ok) {
      notFound();
    }

    return <WatchSlugClient src={`${APIURL}/watch/${id_movie}`} />;

  } catch (error) {
    return notFound();
  }
}