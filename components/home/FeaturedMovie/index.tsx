'use client'

import Image from "next/image";
import MovieDetails from "./MovieDetails";
import MovieActions from "./MovieActions";
import { MovieType } from "@/lib/constants";

interface ImageBackdrop {
  imageUrl: string;
  blurDataURL: string;
}

type FeaturedMovieProps = {
  movie: MovieType;
  imagebackdrop: ImageBackdrop;
}

export default function FeaturedMovie({ movie, imagebackdrop }: FeaturedMovieProps) {
  return (
    <div className="px-5">
      <div className="rounded-2xl flex flex-col justify-between relative">
        <Image
          src={imagebackdrop.imageUrl}
          alt={movie.title}
          fill
          sizes="100vw"
          priority
          className="rounded-2xl object-cover z-10"
          placeholder={imagebackdrop.blurDataURL ? "blur" : "empty"}
          blurDataURL={imagebackdrop.blurDataURL}
        />
        <div
          style={{
            zIndex: "20",
            background: "linear-gradient(0deg,rgba(0, 0, 0, 0.4) 5%, rgba(0, 0, 0, 0.4) 65%, rgba(0, 0, 0, 0) 100%)",
            borderRadius: "1rem"
          }}
        >
          <MovieDetails title={movie.title} overview={movie.overview} maxSlice={80} />
          <MovieActions id_tmdb={movie.id_tmdb} />
        </div>
      </div>
    </div>
  )
}