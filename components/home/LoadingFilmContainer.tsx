'use client'

import styled from "styled-components";
import { MOBILEBREAKPOINT } from "@/lib/constants";

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

interface LoadingFilmContainerProps {
  n: number;
}

export default function LoadingFilmContainer({ n }: LoadingFilmContainerProps) {
  return (
    <Grid className="grid gap-5 p-5 justify-center opacity-40">
      {Array.from({ length: n }).map((_, i) => (
        <CardContainer
        key={i}
        className="bg-amber-100 rounded-2xl relative animate-pulse"
        />
      ))}
    </Grid>
  )
}