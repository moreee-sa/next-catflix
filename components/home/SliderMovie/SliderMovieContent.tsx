'use client'

import styled from "styled-components";
import { useRef } from "react";
import { MdArrowForwardIos, MdArrowBackIosNew  } from "react-icons/md";
import { APIURL, MOBILEBREAKPOINT } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { MovieType } from "@/lib/constants";

const ContainerSliderMovie = styled.div`
  position: relative;
`;

const TitoloSlider = styled.span`
  color: white;
  font-weight: 400;
  font-family: 'Montserrat Variable', sans-serif;
  font-size: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  height: 250px;
  margin-top: 20px;

  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar { display: none; } /* Chrome/Safari */
`;

const Card = styled.div`
  height: 250px;
  aspect-ratio: 9 / 16;
  border-radius: 1rem;
  flex: 0 0 auto;
  position: relative;
`;

const ArrowContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
  opacity: 0.6;
  transition: opacity 0.3s ease-in;
  z-index: 30;
  
  &:hover {
    opacity: 1;
  }

  @media (max-width: ${MOBILEBREAKPOINT}) {
    display: none;
  } 
`;

const ArrowButton = styled.div`
  display: flex;
  width: 40px;
  height: 60%;
  cursor: pointer;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in;
  pointer-events: auto;
  border-radius: 8px;
  background: rgba(0,0,0,0.2);
  
  &:hover {
    background: rgba(0,0,0,0.4);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
`;

type Film = Pick<
  MovieType,
  "_id" | "id_tmdb" | "title" | "overview" | "poster_path"
> & { blurDataURL?: string; }

interface SliderProps {
  titolo: string;
  movies: Film[];
}

export default function SliderMovieContent({ titolo, movies }: SliderProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = Math.round(scrollRef.current.clientWidth * 0.6);
    scrollRef.current.scrollBy({ 
      left: direction === "left" ? -amount : amount, 
      behavior: "smooth" 
    });
  };

  return (
    <ContainerSliderMovie>
      <TitoloSlider className="p-5">{titolo}</TitoloSlider>
      <div className="relative">
        <ArrowContainer>
          <ArrowButton onClick={() => scroll("left")}>
            <MdArrowBackIosNew color="#fefae0" size={40} />
          </ArrowButton>
          <ArrowButton onClick={() => scroll("right")}>
            <MdArrowForwardIos color="#fefae0" size={40} />
          </ArrowButton>
        </ArrowContainer>
        <CardContainer ref={scrollRef}>
          {movies.map((movie, i) => (
          <Link key={movie._id} href={`/movie/${movie.id_tmdb}`}>
            <Card style={{ marginLeft: i === 0 ? "20px" : "0" }} >
              <Image
                src={`${APIURL}/poster/${movie.poster_path}`}
                alt={movie.title}
                fill
                sizes={`(max-width: ${MOBILEBREAKPOINT}) 50vw, 200px`}
                priority={i === 0}
                placeholder={movie.blurDataURL ? "blur" : "empty"}
                blurDataURL={movie.blurDataURL}
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
              />
            </Card>
          </Link>
          ))}
        </CardContainer>
      </div>
    </ContainerSliderMovie>
  );
}