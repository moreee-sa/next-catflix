import { redirect } from "next/navigation";
import { APIURL } from "@/lib/constants";

export default async function WatchSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id_movie: string = slug;

  try {
    return (
      <div className="bg-black">
        <video
          controls
          preload="none"
          autoPlay
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <source src={`${APIURL}/watch/${id_movie}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  } catch (error) {
    console.error("Errore di rete o parsing:", error);
    redirect("/home");
  }
}