'use client'

import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const Grid = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  max-width: 100%;
  margin: 0 auto;
`;

type Film = {
  _id: string;
  id_tmdb: number;
  title: string;
  overview: string;
  poster_path: string;
};

const Container = styled.div`
  height: 300px;
  width: 200px;
`;

interface FilmContainerProps {
  movies: Film[];
}

export default function FilmContainer({ movies }: FilmContainerProps) {
  return (
    <Grid className="grid gap-5 p-5 justify-center">
      {movies.map((movie: any) => (
        <Link key={movie._id} href={`/movie/${movie.id_tmdb}`}>
          <Container className="rounded-2xl relative">
            <Image
              src={`http://192.168.1.221:8000/poster/${movie.poster_path}`}
              alt={movie.title}
              fill
              style={{ objectFit: "cover", borderRadius: "12px" }}
            />
          </Container>
        </Link>
      ))}
    </Grid>
  )
}