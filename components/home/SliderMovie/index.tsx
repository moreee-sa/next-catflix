import { notFound } from "next/navigation";
import SliderMovieContent from "./SliderMovieContent"
import { APIURL } from "@/lib/constants";
import { getBlurData } from "@/lib/getBlurData";
import { MovieType } from "@/lib/constants";

type SliderMovieProps = {
  pagina: number;
  titoloCategoria: string;
  categoria?: string;
}

export default async function SliderMovie({ pagina, titoloCategoria, categoria }: SliderMovieProps) {
  try {
    if (pagina <= 0) notFound();
    // Movie Request
    const res = await fetch(`${APIURL}/movies?pagina=${pagina}`);
    if (!res || !res.ok) notFound();
    const data = await res.json();
    const movie: MovieType[] = data.Film.Film;

    // Movies BlurData
    const MoviesWithBlur = await Promise.all(
      movie.map(async (movie) => {
        const imageUrl = `${APIURL}/poster/${movie.poster_path}`;
        try {
          const blurDataURL = await getBlurData(imageUrl);
          return { ...movie, blurDataURL };
        } catch (e) {
          return { ...movie }; // fallback se fallisce
        }
      })
    );

    return (
      <SliderMovieContent titolo={titoloCategoria} movies={MoviesWithBlur} />
    )
  } catch {
    notFound();
  }
}