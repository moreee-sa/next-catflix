'use client'

import styled from "styled-components"
import '@fontsource-variable/montserrat'
import { TABLETBREAKPOINT, MAXDETAILS} from "@/lib/constants"
import { useState, useEffect } from "react"

const Details = styled.span`
  color: white;
  font-family: 'Montserrat Variable', sans-serif;
  font-size: 18px;
`;

const MovieOverview = styled.p`
  color: #BBBBBB;
  font-weight: 400;
  font-family: 'Montserrat Variable', sans-serif;
  font-size: 18px;

  @media only screen and (max-width: ${TABLETBREAKPOINT}) {
    font-size: 15px;
  }
`;

const PulsanteLeggiTutto = styled.button`
  color: #737570;
  transition: all 0.2s ease;

  &:hover {
    color: #eeeeee;
    cursor: pointer;
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

type MovieDetailsProps = {
  movie: Film;
}

function formatRuntime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
}

export default function MovieDetails({ movie }: MovieDetailsProps) {
  const years: number = new Date(movie.release_date).getFullYear();
  const vote: string = movie.vote_average.toFixed(1);
  const runtimeFormatted: string = formatRuntime(movie.runtime);

  const [lunghezza, setLunghezza] = useState(false);
  const [overviewSnippet, setOverviewSnippet] = useState<string>("");
  const [mostraTutto, setMostraTutto] = useState(false);

  useEffect(() => {
    if (movie.overview.length > MAXDETAILS) {
      setOverviewSnippet(movie.overview.slice(0, MAXDETAILS) + "... ");
      setLunghezza(true);
    } else {
      setOverviewSnippet(movie.overview);
      setLunghezza(false);
    }
  }, [movie]);

  const toggleMostraTutto = () => {
    setMostraTutto(prev => !prev);
  };

  return (
    <>
      <Details>{years} • {vote} • {runtimeFormatted}</Details>
      <MovieOverview>
        {mostraTutto ? movie.overview + " " : overviewSnippet}
        {lunghezza && (
          <PulsanteLeggiTutto onClick={toggleMostraTutto}>
            {mostraTutto ? "Leggi di meno" : "Leggi tutto"}
          </PulsanteLeggiTutto>
        )}
      </MovieOverview>
    </>
  );
}