'use client'

import styled from "styled-components"
import '@fontsource-variable/montserrat';

const Details = styled.span`
  color: white;
  font-family: 'Montserrat Variable', sans-serif;
  font-size: 15px;
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

type MovieDetailsProps = {
  movie: Film;
}

export default function MovieDetails({ movie }: MovieDetailsProps) {
  const years: number = new Date(movie.release_date).getFullYear();
  const vote: string = movie.vote_average.toFixed(1);
  const runtime: number = movie.runtime

  return <Details>{years} - {vote} - {runtime}</Details>
}