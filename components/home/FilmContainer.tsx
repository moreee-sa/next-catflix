'use client'

import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { MOBILEBREAKPOINT, APIURL } from "@/lib/constants";
import { MovieType } from "@/lib/constants";

const Grid = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  max-width: 100%;
  margin: 0 auto;

  @media (max-width: ${MOBILEBREAKPOINT}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CardContainer = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
`;

type Film = Pick<
  MovieType,
  "_id" | "id_tmdb" | "title" | "overview" | "poster_path"
> & { blurDataURL?: string; }

interface FilmContainerProps {
  movies: Film[];
}

export default function FilmContainer({ movies }: FilmContainerProps) {
  return (
    <Grid className="grid gap-5 p-5 justify-center">
      {movies.map((movie, index) => (
        <Link key={movie._id} href={`/movie/${movie.id_tmdb}`}>
          <CardContainer className="rounded-2xl relative">
            <Image
              src={`${APIURL}/poster/${movie.poster_path}`}
              alt={movie.title}
              fill
              sizes={`(max-width: ${MOBILEBREAKPOINT}) 50vw, 200px`}
              priority={index === 0}
              placeholder={movie.blurDataURL ? "blur" : "empty"}
              blurDataURL={movie.blurDataURL}
              style={{ objectFit: "cover" }}
              className="rounded-2xl"
            />
          </CardContainer>
        </Link>
      ))}
    </Grid>
  )
}