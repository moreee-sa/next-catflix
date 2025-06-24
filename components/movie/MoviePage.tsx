'use client'

import styled from "styled-components"
import Image from "next/image";
import { APIURL, TABLETBREAKPOINT } from "@/lib/constants";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  /* background-color: red; */

  @media only screen and (max-width: ${TABLETBREAKPOINT}) {
    padding: 0;
  }
`;

const ContainerInfo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: ${TABLETBREAKPOINT}) {
    flex-direction: column-reverse;
  }
`;

const LeftInfo = styled.div`
  background-color: rgba(22, 0, 35, 1);
  height: 100%;
  width: 40%;  /* 40% dello spazio */

  @media only screen and (max-width: ${TABLETBREAKPOINT}) {
    width: 100%;
  }
`;

const RightInfo = styled.div`
  background-color: #721d1d;
  height: 100%;
  width: 60%;
  position: relative;
  border-radius: 0px 11px 11px 0px;

  @media only screen and (max-width: ${TABLETBREAKPOINT}) {
    width: 100%;
  }
`;

const FadeOverlay = styled.div`
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
    <Container>
      <ContainerInfo>
        <LeftInfo>
          {movie.title}
        </LeftInfo>
        <RightInfo>
          <Image
            src={`${APIURL}/backdrop/${movie.backdrop_path}`}
            alt={movie.title}
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            priority
            placeholder={blurDataURL ? "blur" : "empty"}
            blurDataURL={blurDataURL}
          />
          <FadeOverlay />
        </RightInfo>
      </ContainerInfo>
    </Container>
  )
}