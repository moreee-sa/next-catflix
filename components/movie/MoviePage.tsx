'use client'

import styled from "styled-components"
import Image from "next/image";
import { APIURL, TABLETBREAKPOINT } from "@/lib/constants";

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
    flex-direction: column-reverse;
    height: auto;
  }
`;

const MovieDetailsPanel = styled.div`
  background-color: rgba(22, 0, 35, 1);
  width: 40%; /* 40% dello spazio */

  @media only screen and (max-width: ${TABLETBREAKPOINT}) {
    width: 100%;
  }
`;

const BackdropContainer = styled.div`
  position: relative;
  width: 60%; /* 60% dello spazio */
  height: 100%;
  border-radius: 0px 11px 11px 0px;
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
  background: linear-gradient(90deg,rgba(22, 0, 35, 1) 20%, rgba(0, 0, 0, 0) 40%);

  @media only screen and (max-width: ${TABLETBREAKPOINT}) {
    background: none;
  }
`;

const TitleMovie = styled.span`
  color: white;
`;

interface Film {
  _id: string;
  id_tmdb: number;
  title: string;
  overview: string;
  backdrop_path: string;
}

type MoviePageProps = {
  movie: Film;
  blurDataURL?: string;
};

export default function MoviePage({ movie, blurDataURL }: MoviePageProps) {
  return (
    <PageWrapper>
      <MovieLayout>
        <MovieDetailsPanel>
          {movie.title}
        </MovieDetailsPanel>
        <BackdropContainer>
          <Image
            src={`${APIURL}/backdrop/${movie.backdrop_path}`}
            alt={movie.title}
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            priority
            placeholder={blurDataURL ? "blur" : "empty"}
            blurDataURL={blurDataURL}
          />
          <BackdropOverlay />
        </BackdropContainer>
      </MovieLayout>
    </PageWrapper>
  )
}