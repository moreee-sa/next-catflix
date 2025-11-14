// app/movies/[slug]/page.tsx
import { notFound } from "next/navigation";
import MoviePage from "@/components/movie";
import { getBlurData } from "@/lib/getBlurData";
import { APIURL } from "@/lib/constants";
import { MovieType } from "@/lib/constants";
import '@fontsource/prompt/500.css';
import '@fontsource-variable/montserrat';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id_tmdb = Number(slug);

  const fallbackTitle = "Film";

  try {
    const res = await fetch(`${APIURL}/movie/${id_tmdb}`, {
      next: { revalidate: 3600 },
    });
    
    if (!res.ok) {
      return { title: `${fallbackTitle} | Catflix` };
    }

    const movie: MovieType = await res.json();

    return {
      title: `${movie.title} | Catflix`,
      description: movie.overview,
    };
  } catch {
    return { title: `${fallbackTitle} | Catflix` };
  }
}

export default async function MovieSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id_tmdb = Number(slug);

  let movie: MovieType;
  let blurDataURL: string | undefined;

  // Fetch del film
  try {
    const res = await fetch(`${APIURL}/movie/${id_tmdb}`);
    if (!res || !res.ok) notFound();
    movie = await res.json();
  } catch {
    notFound();
  }

  // Genera blurData
  try {
    const imageUrl = `${APIURL}/backdrop/${movie.backdrop_path}`;
    blurDataURL = await getBlurData(imageUrl);
  } catch {
    blurDataURL = undefined;
  }

  return <MoviePage movie={movie} blurDataURL={blurDataURL} />;
}