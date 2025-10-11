import { notFound } from "next/navigation";
import { getBlurData } from "@/lib/getBlurData";
import { APIURL } from "@/lib/constants";
import FeaturedMovie from "@/components/home/FeaturedMovie";
import SliderMovie from "@/components/home/SliderMovie";
import { MovieType } from "@/lib/constants";

const featured: number = 480530;

export default async function HomePage() {
  try {
    // Featured Movie
    const res_featured = await fetch(`${APIURL}/movie/${featured}`);
    if (!res_featured || !res_featured.ok) notFound();
    const featured_movie: MovieType = await res_featured.json();

    try {
      // Featured Movie BlurData
      const imageUrl = `${APIURL}/backdrop/${featured_movie.backdrop_path}`;
      const blurDataURL = await getBlurData(imageUrl);

      return (
        <>
          <FeaturedMovie movie={featured_movie} imagebackdrop={{ imageUrl, blurDataURL }} />
          <div className="flex flex-col gap-5 my-5">
            <SliderMovie pagina={1} titoloCategoria="Titoli recenti" />
            <SliderMovie pagina={2} titoloCategoria="Altri titoli" />
            <SliderMovie pagina={3} titoloCategoria="Altri Film" />
          </div>
        </>
      )
    } catch {
      notFound();
    }
  } catch {
    notFound();
  }
}