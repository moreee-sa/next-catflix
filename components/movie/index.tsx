import MovieStructure from "./MovieStructure";
import SliderMovie from "../home/SliderMovie";
import { MovieType } from "@/lib/constants";

type MoviePageProps = {
  movie: MovieType;
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