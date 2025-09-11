'use client'

import styled, { keyframes } from "styled-components";
import '@fontsource/prompt/500.css';
import '@fontsource-variable/montserrat';
import Link from "next/link";
import { MdPlayArrow } from "react-icons/md";
import { MOBILEBREAKPOINT, TITLE } from "@/lib/constants";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 80px;
  height: 100vh;

  @media (max-width: ${MOBILEBREAKPOINT}) {
    align-items: flex-start;
    padding: 20px;
  }
`;

const HeadlineText = styled.span`
  color: white;
  font-family: 'Montserrat Variable', sans-serif;
  font-weight: 500;
  font-size: 100px;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-out forwards;

  @media (max-width: ${MOBILEBREAKPOINT}) {
    font-size: 60px;
  }
`;

const SubtitleSection = styled.div`
  margin-top: 20px;
  min-width: 40%;
  height: 20px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out 300ms forwards;
  text-align: center;

  @media (max-width: ${MOBILEBREAKPOINT}) {
    text-align: left;
  }
`;

const SubtitleText = styled.span`
  color: white;
  font-family: 'Montserrat Variable', sans-serif;
  font-weight: 200;
  font-size: 20px;

  @media (max-width: ${MOBILEBREAKPOINT}) {
    font-size: 18px;
  }
`;

const WatchNowSection = styled.div`
  margin-top: 65px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out 600ms forwards;
`;

const ButtonWatchNow = styled.div`
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
  font-family: 'Montserrat Variable', sans-serif;
  font-weight: 500;
  font-size: 15px;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: #d8d8ba;
    box-shadow: 0px 0px 40px 1px #e2e2b67d;
  }
`;

export default function HeroSection() {
  return (
    <MainContent>
      <HeadlineText>
        {TITLE}
      </HeadlineText>
      <SubtitleSection>
        <SubtitleText>
          Il tuo posto per film e intrattenimento.
        </SubtitleText>
      </SubtitleSection>
      <WatchNowSection>
        <Link href={"/home"} style={{ textDecoration: "none" }}>
          <ButtonWatchNow>
            <MdPlayArrow size={20} />
            Scopri i film
          </ButtonWatchNow>
        </Link>
      </WatchNowSection>
    </MainContent>
  )
}