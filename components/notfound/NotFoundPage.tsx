'use client'

import styled from 'styled-components';
import Link from 'next/link' ;
import '@fontsource/prompt/500.css';
import '@fontsource-variable/montserrat';
import { MOBILEBREAKPOINT } from "@/lib/constants";

const ErrorTitle = styled.span`
  color: white;
  font-family: 'Montserrat Variable', sans-serif;
  font-weight: 500;
  font-size: 25px;

  @media (max-width: ${MOBILEBREAKPOINT}) {
    font-size: 20px;
  }
`;

const BackButton = styled.div`
  border-radius: 16px;
  height: 42px;
  background-color: #E2E2B6;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
  box-sizing: border-box;
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

export default function NotFoundPage() {
  return (
    <div className='w-full flex justify-center items-center flex-col gap-5' style={{ minHeight: "50vh" }}>
      <ErrorTitle>Errore connessione API</ErrorTitle>
      <Link href="/">
        <BackButton>
          Torna indietro
        </BackButton>
      </Link>
    </div>
  )
}