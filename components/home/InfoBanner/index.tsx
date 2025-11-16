'use client'

import { FaGithub } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import styled from "styled-components";
import Link from "next/link";

const Title = styled.span`
  color: #ece4db;
  font-family: 'Montserrat Variable', sans-serif;
`;

const Description = styled.span`
  color: #ece4db;
  font-family: 'Montserrat Variable', sans-serif;
`;

export default function InfoBanner() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 p-5">
      <Link className="w-full lg:w-1/2" href={"/archive"}>
        <div className="gap-10 p-6 md:p-10 lg:p-16 bg-[#040019] rounded-2xl flex items-center lg:justify-center transition-[scale] hover:scale-[1.01]">
          <div className="h-24 md:h-24">
            <MdMovie className="w-full h-full" size={64} color="white" />
          </div>
          <div className="flex flex-col gap-2">
            <Title className="text-lg md:text-3xl lg:text-4xl font-semibold">Non trovi quello che stai cercando?</Title>
            <Description>{`Consulta l’archivio per scoprire di più`}</Description>
          </div>
        </div>
      </Link>

      <Link className="w-full lg:w-1/2" href={"https://github.com/moreee-sa/next-catflix.git"} target="blank">
        <div className="gap-10 p-6 md:p-10 lg:p-16 bg-[#040019] rounded-2xl flex items-center lg:justify-center transition-[scale] hover:scale-[1.01]">
          <div className="h-24 md:h-24">
            <FaGithub className="w-full h-full" size={64} color="white" />
          </div>
          <div className="flex flex-col gap-2">
            <Title className="text-lg md:text-3xl lg:text-4xl font-semibold">moreee-sa/next-catflix</Title>
            <Description className="text-base md:text-xl lg:text-2xl">Il tuo cinema personale, sempre a portata di click</Description>
          </div>
        </div>
      </Link>
    </div>
  )
}