'use client'

import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { MOBILEBREAKPOINT, APIURL, TABLETBREAKPOINT} from "@/lib/constants";
import { FaPlay } from "react-icons/fa";
import '@fontsource/prompt/500.css';
import '@fontsource-variable/montserrat';
import { IoMdInformationCircleOutline } from "react-icons/io";

const ContainerFeaturedMovie = styled.div`
  /* height: 60vh; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  /* background-color: #6d0e0e; */
`;

const ContainerGeneri = styled.div`
  width: 100%;
  height: 100px;
  /* background-color: black; */
`;

const ContainerDettagli = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  justify-content: center;
  /* background-color: red; */

  @media only screen and (max-width: ${TABLETBREAKPOINT}) {
    justify-content: flex-end;
  }
`;

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

const ContainerPulsanti = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
  /* background-color: #15ff00; */

  @media only screen and (max-width: ${MOBILEBREAKPOINT}) {
    height: 150px;
    justify-content: center;
  }
`;

const Pulsante = styled.div`
  border-radius: 8px;
  height: 62px;
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

const ContainerMute = styled.div`
  width: 100%;
  height: 100px;
  /* background-color: #0099ff; */
`;

type Film = {
  _id: string;
  id_tmdb: number;
  title: string;
  overview: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  runtime: number;
};

export default function FeaturedMovie({ imageUrl, movie }: { imageUrl: string, movie: Film}) {
  return (
    // Container
    <div className="p-5">
      <ContainerFeaturedMovie className="rounded-2xl">
        <Image
          src={imageUrl}
          alt={movie.title}
          fill
          sizes="100vw"
          priority
          style={{ objectFit: "cover", borderRadius: "1rem", zIndex: 10 }}
        />
        <div style={{ zIndex: "20" }}>
          {/* <ContainerGeneri></ContainerGeneri> */}

          <ContainerDettagli>
            <Titolo>
              {movie.title.toLocaleUpperCase()}
            </Titolo>
            <div style={{ maxWidth: "50vh" }}>
              <Descrizione>
                {movie.overview.length > 50 
                  ? movie.overview.slice(0, 90) + "..." 
                  : movie.overview}
              </Descrizione>
            </div>
          </ContainerDettagli>

          <ContainerPulsanti>
              <Link href={`/watch/${movie.id_tmdb}`}>
                <PulsanteGuarda><FaPlay size={20} />Guarda ora</PulsanteGuarda>
              </Link>
              <Link href={`/movie/${movie.id_tmdb}`}>
                <PulsanteDettagli><IoMdInformationCircleOutline size={30} color="white" />Dettagli</PulsanteDettagli>
              </Link>
          </ContainerPulsanti>

          {/* <ContainerMute></ContainerMute> */}
        </div>
      </ContainerFeaturedMovie>
    </div>
  )
}