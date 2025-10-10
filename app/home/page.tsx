import { notFound } from "next/navigation";
import { getBlurData } from "@/lib/getBlurData";
import { APIURL } from "@/lib/constants";
import FeaturedMovie from "@/components/home/FeaturedMovie";
import SliderMovie from "@/components/home/SliderMovie";

type Film = {
  _id: string;
  id_tmdb: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  runtime: number;
};

const featured: number = 1294203;

export default async function HomePage() {
  try {
    // Featured Movie
    const res_featured = await fetch(`${APIURL}/movie/${featured}`);
    if (!res_featured || !res_featured.ok) notFound();
    const featured_movie: Film = await res_featured.json();

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