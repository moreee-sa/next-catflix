'use client'

import styled from "styled-components"
import Image from "next/image";
import '@fontsource-variable/montserrat';
import '@fontsource/prompt/500.css';
import { APIURL, MOBILEBREAKPOINT, TABLETBREAKPOINT } from "@/lib/constants";
import MovieDetails from "./MovieDetails";

const PageWrapper = styled.div`
  width: 100%;
  padding: 20px;
  /* background-color: red; */

  @media only screen and (max-width: ${TABLETBREAKPOINT}) {
    padding: 0;
  }
`;

const MovieLayout = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;

  @media only screen and (max-width: ${TABLETBREAKPOINT}) {
    flex-direction: column;
    height: auto;
  }
`;

const MovieDetailsPanel = styled.div`
  background-color: rgba(22, 0, 35, 1);
  width: 40%; /* 40% dello spazio */
  padding: 20px;

  @media only screen and (max-width: ${TABLETBREAKPOINT}) {
    width: 100%;
  }
`;

const BackdropContainer = styled.div`
  position: relative;
  width: 60%; /* 60% dello spazio */
  height: 100%;
  border-radius: 11px 0px 0px 11px;
  overflow: hidden;

  @media only screen and (max-width: ${TABLETBREAKPOINT}) {
    width: 100%;
    height: 40vh;
    border-radius: 0;
  }
`;

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

export default function MoviePage({ movie, blurDataURL }: MoviePageProps) {
  return (
    <PageWrapper>
      <MovieLayout>
        <BackdropContainer>
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
        </BackdropContainer>
        <MovieDetailsPanel>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieDetails movie={movie} />
        </MovieDetailsPanel>
      </MovieLayout>
    </PageWrapper>
  )
}