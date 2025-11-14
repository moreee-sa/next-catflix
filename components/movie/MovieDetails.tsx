'use client'

import styled from "styled-components";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { TABLETBREAKPOINT, MAXDETAILS} from "@/lib/constants";
import { useState, useEffect } from "react";
import { MovieType } from "@/lib/constants";

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

type MovieDetailsProps = {
  movie: MovieType;
}

function formatRuntime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
}

export default function MovieDetails({ movie }: MovieDetailsProps) {
  const id_movie: string = movie.id_tmdb;
  const years: number = movie.release_date ? new Date(movie.release_date).getFullYear() : 0;
  const vote: string = movie.vote_average != null ? movie.vote_average.toFixed(1) : "N/A";
  const runtimeFormatted: string = movie.runtime != null ? formatRuntime(movie.runtime) : "N/A";

  const [mostraTutto, setMostraTutto] = useState(false);

  const overview = movie.overview ?? "";
  const lunghezza = overview.length > MAXDETAILS;
  const overviewSnippet = lunghezza ? overview.slice(0, MAXDETAILS) + "... " : overview;

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
        {mostraTutto ? (movie.overview ?? "") + " " : overviewSnippet}
        {lunghezza && (
          <PulsanteLeggiTutto onClick={toggleMostraTutto}>
            {mostraTutto ? "Leggi di meno" : "Leggi tutto"}
          </PulsanteLeggiTutto>
        )}
      </MovieOverview>
    </>
  );
}