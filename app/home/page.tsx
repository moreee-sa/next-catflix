import { notFound } from "next/navigation";
import FilmContainer from "@/components/home/FilmContainer";
import { getBlurData } from "@/lib/getBlurData";
import { APIURL } from "@/lib/constants";
import FeaturedMovie from "@/components/home/FeaturedMovie";
import SliderMovie from "@/components/home/SliderMovie";

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
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  runtime: number;
};

const pagina: number = 1;

const featured = 1294203;

export default async function HomePage() {
  try {
    // Featured Movie
    const res_featured = await fetch(`${APIURL}/movie/${featured}`);
    if (!res_featured || !res_featured.ok) notFound();
    const featured_movie: Film = await res_featured.json();

    // Recent Movies
    const res_recent = await fetch(`${APIURL}/movies?pagina=1`);
    if (!res_recent || !res_recent.ok) notFound();
    const data = await res_recent.json();
    const recent_movies: Film[] = data.Film.Film;

    try {
      // Featured Movie BlurData
      const imageUrl = `${APIURL}/backdrop/${featured_movie.backdrop_path}`;
      const blurDataURL = await getBlurData(imageUrl);

      // Recent Movies BlurData
      const moviesWithBlur = await Promise.all(
        recent_movies.map(async (movie) => {
          const imageUrl = `${APIURL}/poster/${movie.poster_path}`;
          try {
            const blurDataURL = await getBlurData(imageUrl);
            console.log(blurDataURL)
            return { ...movie, blurDataURL };
          } catch (e) {
            return { ...movie }; // fallback se fallisce
          }
        })
      );

      return (
        <>
          <FeaturedMovie movie={featured_movie} imagebackdrop={{ imageUrl, blurDataURL }} />
          <SliderMovie movies={moviesWithBlur} titolo={"Titoli recenti"} />
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