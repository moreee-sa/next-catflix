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
      </div>
      <SliderMovie titoloCategoria="Consigliati" />
    </>
  )
}