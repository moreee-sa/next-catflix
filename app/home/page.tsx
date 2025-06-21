import { notFound } from "next/navigation";
import FilmContainer from "@/components/home/FilmContainer";
import { getBlurData } from "@/lib/getBlurData";

type Film = {
  _id: string;
  id_tmdb: number;
  title: string;
  overview: string;
  poster_path: string;
  blurDataURL?: string;
};

export default async function HomePage() {
  try {
    const res = await fetch("http://192.168.1.221:8000/movies");

    if (!res.ok) {
      notFound();
    }

    const data = await res.json();
    const movies: Film[] = data.Film.Film;

    // Aggiungi blurDataURL a ogni film
    const moviesWithBlur = await Promise.all(
      movies.map(async (movie) => {
        const imageUrl = `http://192.168.1.221:8000/poster/${movie.poster_path}`;
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