'use client'

import styled from "styled-components"
import Image from "next/image";
import MovieDetails from "./MovieDetails";
import { APIURL, TABLETBREAKPOINT } from "@/lib/constants";
import '@fontsource-variable/montserrat';
import '@fontsource/prompt/500.css';

const BackdropOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
  background: linear-gradient(90deg,rgba(0, 0, 0, 0) 80%, rgba(22, 0, 35, 1) 100%);

  @media only screen and (max-width: ${TABLETBREAKPOINT}) {
    background: none;
  }
`;

const MovieDetailsPanel = styled.div`
  background-color: rgba(22, 0, 35, 1);
  width: 40%;
  padding: 10px 20px;

  @media only screen and (max-width: ${TABLETBREAKPOINT}) {
    width: 100%;
  }
`;

const MovieTitle = styled.h1`
  color: #EAEAEA;
  font-weight: 500;
  font-family: 'Prompt', sans-serif;
  font-size: 50px;

  @media only screen and (max-width: ${TABLETBREAKPOINT}) {
    font-size: 28px;
  }
`;

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

export default function MovieStructure({ movie, blurDataURL }: MoviePageProps) {
  return (
    <div className="w-full flex max-lg:flex-col max-lg:h-auto">
      <div className="w-[60%] relative h-[50vh] overflow-hidden rounded-l-lg max-lg:w-full max-lg:h-[40vh] max-lg:rounded-none">
        <Image
          src={`${APIURL}/backdrop/${movie.backdrop_path}`}
          alt={movie.title}
          fill
          sizes="(max-width: 960px) 100vw, 60vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          placeholder={blurDataURL ? "blur" : "empty"}
          blurDataURL={blurDataURL}
        />
        <BackdropOverlay />
      </div>
      <MovieDetailsPanel>
        <MovieTitle>{movie.title.toLocaleUpperCase()}</MovieTitle>
        <MovieDetails movie={movie} />
      </MovieDetailsPanel>
    </div>
  )
}