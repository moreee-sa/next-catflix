'use client'
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

const Title = styled.span`
  color: white;
  font-family: 'Montserrat Variable', sans-serif;
`;

const Description = styled.span`
  color: white;
  font-family: 'Montserrat Variable', sans-serif;
`;

export default function InfoBanner() {
  return (
    <div className="w-full gap-10 p-6 md:p-10 lg:p-16 bg-[#040019] flex items-center justify-center">
      <div className="h-24 md:h-52">
        <FaGithub className="w-full h-full" size={64} color="white" />
      </div>
      <div className="flex flex-col gap-2">
        <Title className="text-lg md:text-3xl lg:text-4xl font-semibold">moreee-sa/next-catflix</Title>
        <Description className="text-base md:text-xl lg:text-2xl">Il tuo cinema personale, sempre a portata di click</Description>
      </div>
    </div>
  )
}