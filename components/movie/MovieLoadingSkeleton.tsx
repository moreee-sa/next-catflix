'use client'

import styled from "styled-components";
import { TABLETBREAKPOINT } from "@/lib/constants";
import { image } from "motion/react-client";
import SliderMovieLoading from "../home/SliderMovie/SliderMovieLoading";

const MovieLayout = styled.div`
  display: flex;
  width: 100%;

  @media only screen and (max-width: ${TABLETBREAKPOINT}) {
    flex-direction: column;
    height: auto;
  }
`;

const BackdropContainer = styled.div`
  position: relative;
  width: 60%;
  height: 50vh;
  border-radius: 8px 0px 0px 8px;
  overflow: hidden;

  @media only screen and (max-width: ${TABLETBREAKPOINT}) {
    width: 100%;
    height: 40vh;
    border-radius: 0;
  }
`;

const MovieTitle = styled.h1`
  height: 75px;

  @media only screen and (max-width: ${TABLETBREAKPOINT}) {
    height: 42px;
  }
`;

const MovieDetailsPanel = styled.div`
  width: 40%;
  padding: 10px 20px;

  @media only screen and (max-width: ${TABLETBREAKPOINT}) {
    width: 100%;
  }
`;

const PulsanteGuarda = styled.div`
  border-radius: 8px;
  height: 42px;
  width: 144px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding: 15px;
`;

export default function MovieLoadingSkeleton() {
  return (
    <>
      <div className="w-full p-5 max-lg:p-0">
        <MovieLayout>
          <BackdropContainer className="bg-gray-700 animate-pulse" />

          {/* Details Panel */}
          <MovieDetailsPanel>
            {/* Titolo */}
            <MovieTitle className="bg-gray-400 animate-pulse w-[280px] rounded-2xl" />

            {/* Dettagli */}
            <div style={{ margin: "15px 0" }}>
              <div className="bg-gray-500 animate-pulse w-[150px] h-[20px] rounded-lg" />
            </div>

            {/* Pulsante */}
            <PulsanteGuarda className="bg-gray-400 animate-pulse w-[144px] h-[42px] rounded-lg" />

            {/* Overview */}
            <div style={{ marginTop: "15px" }} className="flex flex-col gap-2 mt-2">
              <div className="bg-gray-400 animate-pulse w-full h-4 rounded-lg" />
              <div className="bg-gray-400 animate-pulse w-11/12 h-4 rounded-lg" />
              <div className="bg-gray-400 animate-pulse w-10/12 h-4 rounded-lg" />
            </div>
          </MovieDetailsPanel>
        </MovieLayout>
        <div className="w-64 h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" />
      </div>
      <SliderMovieLoading />
    </>
  )
}