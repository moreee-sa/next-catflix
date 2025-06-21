'use client'

import styled from "styled-components"
import Image from "next/image";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  /* background-color: red; */
`;

const ContainerInfo = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #6d6d3b; */
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 40%;
  border-radius: 8px 8px 0 0;
  /* background-color: blue; */
`;

const TitleMovie = styled.span`
  color: white;
`;

type MoviePageProps = {
  id_tmdb: number;
  title: string;
  overview: string;
  backdrop_path: string;
};

export default function MoviePage({
  id_tmdb,
  title,
  overview,
  backdrop_path
}: MoviePageProps) {
  return (
    <Container>
      <ContainerInfo>
        <ImageContainer className="relative">
          <Image
            src={`http://192.168.1.221:8000/backdrop/${backdrop_path}`}
            alt={title}
            fill
            style={{ objectFit: "cover", borderRadius: "8px 8px 0 0" }}
            priority
          />
        </ImageContainer>
        <TitleMovie>
          {title}
        </TitleMovie>
      </ContainerInfo>
    </Container>
  )
}