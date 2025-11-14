import { notFound } from "next/navigation";
import { getBlurData } from "@/lib/getBlurData";
import { APIURL } from "@/lib/constants";
import FeaturedMovie from "@/components/home/FeaturedMovie";
import SliderMovie from "@/components/home/SliderMovie";
import { MovieType } from "@/lib/constants";
import InfoBanner from "@/components/home/InfoBanner";
import '@fontsource/prompt/500.css';
import '@fontsource-variable/montserrat';

const featured: number = 1062722;

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
            <SliderMovie endpoint="popular" titoloCategoria="Titoli recenti" />
            {/* <SliderMovie endpoint="popular" titoloCategoria="Altri titoli" /> */}
            {/* <SliderMovie endpoint="popular" titoloCategoria="Altri Film" /> */}
          </div>
          <InfoBanner />
        </>
      )
    } catch {
      notFound();
    }
  } catch {
    notFound();
  }
}