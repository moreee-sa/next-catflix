import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

type Film = {
  _id: string;
  id_tmdb: number;
  title: string;
  overview: string;
  poster_path: string;
};

export default async function HomePage() {
  await new Promise(resolve => setTimeout(resolve, 1500));

  try {
    const res = await fetch("http://192.168.1.221:8000/movies", {
      cache: "no-store",
    });

    if (!res.ok) {
      notFound();
    }

    const data = await res.json();
    const movies: Film[] = data.Film.Film;

    // renderizza la pagina con i dati
    return (
      <div
        className="grid gap-4 p-5 justify-center"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        {movies.map((movie) => (
          <Link key={movie._id} href={`/movie/${movie.id_tmdb}`}>
            <div
              className="rounded-2xl relative"
              style={{ height: "300px", width: "200px" }}
            >
              <Image
                src={`http://192.168.1.221:8000/poster/${movie.poster_path}`}
                alt={movie.title}
                fill
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
          </Link>
        ))}
      </div>
    );
  } catch (error) {
    notFound();
  }
}