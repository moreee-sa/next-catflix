'use client'

import styled from "styled-components";
import { MOBILEBREAKPOINT } from "@/lib/constants";
import '@fontsource/prompt/500.css';
import '@fontsource-variable/montserrat';


const Titolo = styled.span`
  color: white;
  font-family: 'Prompt', sans-serif;
  font-weight: 500;
  font-size: 35px;

  @media only screen and (max-width: ${MOBILEBREAKPOINT}) {
    font-size: 20px;
  }
`;

const Descrizione = styled.span`
  color: #dadada;
  font-weight: 400;
  font-family: 'Montserrat Variable', sans-serif;
  font-size: 18px;
  margin-top: 15px;

  @media only screen and (max-width: ${MOBILEBREAKPOINT}) {
    font-size: 15px;
  }
`;

type MovieDetailsProps = {
  title: string,
  overview: string;
  maxSlice: number;
}

export default function MovieDetails({ title, overview, maxSlice }: MovieDetailsProps) {
  return (
    <div className="w-full h-[400px] flex py-0 px-5 flex-col justify-end">
      <Titolo>{title.toLocaleUpperCase()}</Titolo>
      <div className="max-w-[50vh]">
        <Descrizione>
          {overview.length > 50 
            ? overview.slice(0, maxSlice) + "..." 
            : overview}
        </Descrizione>
      </div>
    </div>
  )
}