'use client'

import styled from "styled-components";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import '@fontsource/prompt/500.css';
import '@fontsource-variable/montserrat';
import { TABLETBREAKPOINT, MAXDETAILS} from "@/lib/constants";
import { useState, useEffect } from "react";

const Details = styled.span`
  color: white;
  font-family: 'Montserrat Variable', sans-serif;
  font-size: 15px;
`;

const MovieOverview = styled.p`
  color: #BBBBBB;
  font-weight: 400;
  font-family: 'Montserrat Variable', sans-serif;
  font-size: 18px;
  margin-top: 15px;

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

const PulsanteGuarda = styled.div`
  border-radius: 8px;
  height: 42px;
  width: 144px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding: 15px;
  color: #161c29;
  font-family: 'Prompt', sans-serif;
  font-weight: 500;
  font-size: 15px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #000000;
    color: white;
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
  const id_movie: string = movie._id;
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
      <div style={{ margin: "15px 0" }}>
        <Details>{years} • {vote} • {runtimeFormatted}</Details>
      </div>
      <Link href={`/watch/${id_movie}`}>
        <PulsanteGuarda><FaPlay />Guarda ora</PulsanteGuarda>
      </Link>
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