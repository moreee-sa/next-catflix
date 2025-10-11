'use client'

import styled from "styled-components";
import { MOBILEBREAKPOINT } from "@/lib/constants";
import '@fontsource/prompt/500.css';
import '@fontsource-variable/montserrat';


const Titolo = styled.span`
  color: white;
  font-family: 'Prompt', sans-serif;
  font-weight: 500;
`;

const Descrizione = styled.span`
  color: #dadada;
  font-weight: 400;
  font-family: 'Montserrat Variable', sans-serif;
  margin-top: 15px;
`;

type MovieDetailsProps = {
  title: string,
  overview: string;
  maxSlice: number;
}

export default function MovieDetails({ title, overview, maxSlice }: MovieDetailsProps) {
  return (
    <div className="w-full h-[500px] max-lg:h-[250px] max-md:h-[300px] flex py-0 px-5 flex-col justify-end">
      <Titolo className="text-6xl max-lg:text-3xl">{title.toLocaleUpperCase()}</Titolo>
      <div className="max-w-[50vh]">
        <Descrizione className="text-xl max-lg:text-lg max-md:text-base">
          {overview.length > 50 
            ? overview.slice(0, maxSlice) + "..." 
            : overview}
        </Descrizione>
      </div>
    </div>
  )
}