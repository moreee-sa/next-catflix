import { notFound } from "next/navigation";
import FilmContainer from "@/components/home/FilmContainer";
import { getBlurData } from "@/lib/getBlurData";
import { APIURL } from "@/lib/constants";

type Film = {
  _id: string;
  id_tmdb: number;
  title: string;
  overview: string;
  poster_path: string;
  blurDataURL?: string;
};

const pagina: number = 1;

export default async function HomePage() {
  try {
    const res = await fetch(`${APIURL}/movies?pagina=1`);

    if (!res.ok) {
      notFound();
    }

    const data = await res.json();
    const movies: Film[] = data.Film.Film;
    // console.log(movies)

    const moviesWithBlur = await Promise.all(
      movies.map(async (movie) => {
        const imageUrl = `${APIURL}/poster/${movie.poster_path}`;
        try {
          const blurDataURL = await getBlurData(imageUrl);
          return { ...movie, blurDataURL };
        } catch (e) {
          return { ...movie }; // fallback se fallisce
        }
      })
    );

    return <FilmContainer movies={moviesWithBlur} />;
  } catch (error) {
    notFound();
  }
}