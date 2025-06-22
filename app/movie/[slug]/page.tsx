import MoviePage from "@/components/movie/MoviePage";
import { getBlurData } from "@/lib/getBlurData";
import { redirect } from 'next/navigation';
import { APIURL } from "@/lib/constants";

type Film = {
  _id: string;
  id_tmdb: number;
  title: string;
  overview: string;
  backdrop_path: string;
};

export default async function MovieSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id_tmdb = Number(slug);

  try {
    const res = await fetch(`${APIURL}/movie/${id_tmdb}`);

    if (!res.ok) {
      console.error("Errore nella risposta:", res.status);
      // not-found necessario
    }

    const movie: Film = await res.json();

    try {
      const imageUrl = `${APIURL}/backdrop/${movie.backdrop_path}`;
      const blurDataURL = await getBlurData(imageUrl);
      return (
        <MoviePage movie={movie} blurDataURL={blurDataURL} />
      )
    } catch (e) {
      return (
        <MoviePage movie={movie} />
      )
    }

  } catch (error) {
    console.error("Errore di rete o parsing:", error);
    redirect('/home');
  }
}