import MoviePage from "@/components/movie/MoviePage";

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
    const res = await fetch(`http://192.168.1.221:8000/movie/${slug}`);

    if (!res.ok) {
      console.error("Errore nella risposta:", res.status);
      // not-found necessario
    }

    const movie: Film = await res.json();

    return (
      <MoviePage
        id_tmdb={movie.id_tmdb}
        title={movie.title}
        overview={movie.overview}
        backdrop_path={movie.backdrop_path}
      />
    );
  } catch (error) {
    console.error("Errore di rete o parsing:", error);
    return <div>Errore nel caricamento</div>;
  }
}