import MovieStructure from "./MovieStructure";
import SliderMovie from "../home/SliderMovie";

interface Film {
  _id: string;
  id_tmdb: number;
  title: string;
  overview: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  runtime: number;
}

type MoviePageProps = {
  movie: Film;
  blurDataURL?: string;
};

export default function MoviePage({ movie, blurDataURL }: MoviePageProps) {
  return (
    <>
      <div className="w-full p-5 max-lg:p-0">
        <MovieStructure movie={movie} blurDataURL={blurDataURL} />
        {/* hr */}
        <div className="w-64 h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" />
      </div>
      <SliderMovie pagina={5} titoloCategoria="Consigliati" />
    </>
  )
}