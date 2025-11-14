'use client'

import styled from "styled-components"
import Link from "next/link"
import { FaPlay } from "react-icons/fa"
import { IoMdInformationCircleOutline } from "react-icons/io"
import { TABLETBREAKPOINT } from "@/lib/constants"

const Pulsante = styled.div`
  border-radius: 8px;
  height: 56px;
  width: 164px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding: 15px;
  font-family: 'Prompt', sans-serif;
  font-weight: 500;
  font-size: 18px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  @media only screen and (max-width: ${TABLETBREAKPOINT}) {
    font-size: 15px;
    height: 42px;
    width: 144px;
  }
`;

const PulsanteGuarda = styled(Pulsante)`
  background-color: white;
  color: #161c29;

  &:hover {
    background-color: #000000;
    color: white;
  }
`;

const PulsanteDettagli = styled(Pulsante)`
  background-color: #677080c5;
  color: #ffffff;

  &:hover {
    background-color: #232427;
    color: white;
  }
`;

type MovieActionsProps = {
  id_tmdb: string;
};

export default function MovieActions({ id_tmdb }: MovieActionsProps) {
  return (
    <div className="w-full h-[200px] flex items-center gap-5 py-0 px-5 max-md:h-[120px] max-md:justify-center">
      <Link href={`/watch/${id_tmdb}`}>
        <PulsanteGuarda><FaPlay size={15} />Guarda ora</PulsanteGuarda>
      </Link>
      <Link href={`/movie/${id_tmdb}`}>
        <PulsanteDettagli><IoMdInformationCircleOutline size={25} color="white" />Dettagli</PulsanteDettagli>
      </Link>
    </div>
  )
}