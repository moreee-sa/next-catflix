'use client'

import styled from "styled-components"
import Image from "next/image";
import { APIURL } from "@/lib/constants";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  /* background-color: red; */
`;

const ContainerInfo = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: yellow; */
`;

const ContainerImage = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  /* background-color: #3700ff; */
`;

const LeftInfo = styled.div`
  background-color: rgba(22, 0, 35, 1);
  height: 100%;
  width: 40%;  /* 40% dello spazio */
`;

const RightInfo = styled.div`
  background-color: #721d1d;
  height: 100%;
  width: 60%;
  position: relative;
  overflow: hidden; /* per fare in modo che l’overlay non esca dai bordi */
  border-radius: 0px 11px 11px 0px;
`;

const FadeOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
  background: linear-gradient(90deg,rgba(22, 0, 35, 1) 20%, rgba(0, 0, 0, 0) 40%);
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
        <ContainerImage>
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
        </ContainerImage>
      </ContainerInfo>
    </Container>
  )
}