import { notFound } from "next/navigation";
import SliderMovieContent from "./SliderMovieContent"
import { APIURL } from "@/lib/constants";
import { getBlurData } from "@/lib/getBlurData";
import { MovieType } from "@/lib/constants";

type SliderMovieProps = {
  titoloCategoria: string;
  endpoint: string; // 'popular', 'top_rated', 'recent'
}

export default async function SliderMovie({ titoloCategoria, endpoint }: SliderMovieProps) {
  try {
    // URL dinamico basato sull'endpoint
    const url = `${APIURL}/movie/${endpoint}`;

    const res = await fetch(url);
    if (!res || !res.ok) notFound();
    const data = await res.json();
    const movies: MovieType[] = data.Film;

    // Genera blurData
    const MoviesWithBlur = await Promise.all(
      movies.map(async (movie) => {
        const imageUrl = `${APIURL}/poster/${movie.poster_path}`;
        try {
          const blurDataURL = await getBlurData(imageUrl);
          return { ...movie, blurDataURL };
        } catch {
          return { ...movie };
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