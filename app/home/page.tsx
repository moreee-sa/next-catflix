import { notFound } from "next/navigation";
import FilmContainer from "@/components/home/FilmContainer";

type Film = {
  _id: string;
  id_tmdb: number;
  title: string;
  overview: string;
  poster_path: string;
};


export default async function HomePage() {
  // await new Promise(resolve => setTimeout(resolve, 1500));

  try {
    const res = await fetch("http://192.168.1.221:8000/movies", {
      // cache: "no-store",
    });

    if (!res.ok) {
      notFound();
    }

    const data = await res.json();
    const movies: Film[] = data.Film.Film;

    // renderizza la pagina con i dati
    return (
      <FilmContainer movies={movies} />
    )
  } catch (error) {
    notFound();
  }
}