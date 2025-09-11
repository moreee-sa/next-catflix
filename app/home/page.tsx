import { notFound } from "next/navigation";
import FilmContainer from "@/components/home/FilmContainer";
import { getBlurData } from "@/lib/getBlurData";
import { APIURL } from "@/lib/constants";
import FeaturedMovie from "@/components/home/FeaturedMovie";

// type Film = {
//   _id: string;
//   id_tmdb: number;
//   title: string;
//   overview: string;
//   poster_path: string;
//   blurDataURL?: string;
// };

type Film = {
  _id: string;
  id_tmdb: number;
  title: string;
  overview: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  runtime: number;
};

const pagina: number = 1;

const featured = 1294203;

export default async function HomePage() {
  try {
    const res = await fetch(`${APIURL}/movie/${featured}`);
    if (!res || !res.ok) notFound();

    const movie: Film = await res.json();

    try {
      const imageUrl = `${APIURL}/backdrop/${movie.backdrop_path}`;
      const blurDataURL = await getBlurData(imageUrl);

      return (
        <>
          <FeaturedMovie movie={movie} imagebackdrop={{ imageUrl, blurDataURL }} />
          {/* Nuovo Layout */}
        </>
      )
    } catch {
      notFound();
    }
  } catch {
    notFound();
  }

  // Vecchia versione
  // try {
  //   const res = await fetch(`${APIURL}/movies?pagina=1`);

  //   if (!res.ok) {
  //     notFound();
  //   }

  //   const data = await res.json();
  //   const movies: Film[] = data.Film.Film;
  //   // console.log(movies)

  //   const moviesWithBlur = await Promise.all(
  //     movies.map(async (movie) => {
  //       const imageUrl = `${APIURL}/poster/${movie.poster_path}`;
  //       try {
  //         const blurDataURL = await getBlurData(imageUrl);
  //         return { ...movie, blurDataURL };
  //       } catch (e) {
  //         return { ...movie }; // fallback se fallisce
  //       }
  //     })
  //   );

  //   return <FilmContainer movies={moviesWithBlur} />;
  // } catch (error) {
  //   notFound();
  // }
}