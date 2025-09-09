import { notFound } from "next/navigation";
import MoviePage from "@/components/movie/MoviePage";
import { getBlurData } from "@/lib/getBlurData";
import { APIURL } from "@/lib/constants";

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

export default async function MovieSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id_tmdb = Number(slug);

  try {
    const res = await fetch(`${APIURL}/movie/${id_tmdb}`);

    if (!res || !res.ok) {
      notFound();
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
    notFound();
  }
}