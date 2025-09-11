'use client'

import styled from "styled-components";
import { MOBILEBREAKPOINT, TABLETBREAKPOINT} from "@/lib/constants";

const ContainerFeaturedMovie = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const ContainerDettagli = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  justify-content: center;
  max-width: 50vh;

  @media only screen and (max-width: ${TABLETBREAKPOINT}) {
    justify-content: flex-end;
  }
`;


const ContainerSpazio = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 20px;

  @media only screen and (max-width: ${MOBILEBREAKPOINT}) {
    height: 150px;
    justify-content: center;
  }
`;

export default function FeaturedMovieLoading() {
  return (
    // Container
    <div className="p-5 opacity-40">
      <ContainerFeaturedMovie className="bg-gray-700 rounded-2xl animate-pulse">
        <div style={{ zIndex: "20" }}>
          <ContainerDettagli>
            {/* Titolo */}
            <div className="bg-gray-400 animate-pulse rounded-2xl h-[52] w-[380px]" />

            {/* Dettagli */}
            <div style={{ marginTop: "15px" }} className="flex flex-col gap-2 mt-2">
              <div className="bg-gray-400 animate-pulse w-full h-4 rounded-lg" />
              <div className="bg-gray-400 animate-pulse w-11/12 h-4 rounded-lg" />
              <div className="bg-gray-400 animate-pulse w-10/12 h-4 rounded-lg" />
            </div>
          </ContainerDettagli>
          <ContainerSpazio />
        </div>
      </ContainerFeaturedMovie>
    </div>
  )
}