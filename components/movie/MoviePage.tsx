'use client'

import styled from "styled-components"
import Image from "next/image";
import { APIURL } from "@/lib/constants";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
`;

const ContainerInfo = styled.div`
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 80%;
  border-radius: 8px 8px 0 0;
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
        <ImageContainer className="relative">
          <Image
            src={`${APIURL}/backdrop/${movie.backdrop_path}`}
            alt={movie.title}
            fill
            style={{ objectFit: "cover", objectPosition: "top", borderRadius: "8px 8px 0 0" }}
            priority
            placeholder={blurDataURL ? "blur" : "empty"}
            blurDataURL={blurDataURL}
          />
        </ImageContainer>
        <TitleMovie>
          {movie.title}
        </TitleMovie>
      </ContainerInfo>
    </Container>
  )
}