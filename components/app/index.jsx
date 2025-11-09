'use client'

import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { MdPlayArrow } from "react-icons/md";
import { MOBILEBREAKPOINT, TITLE } from "@/lib/constants";
import { TypeAnimation } from "react-type-animation";
import AnimatedContent from "../AnimatedContent";

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

  @media (max-width: ${MOBILEBREAKPOINT}) {
    font-size: 55px;
  }
`;

const SubtitleSection = styled.div`
  margin-top: 20px;
  min-width: 40%;
  height: 20px;
  display: flex;
  justify-content: center;

  @media (max-width: ${MOBILEBREAKPOINT}) {
    justify-content: flex-start;
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
          <TypeAnimation
            sequence={[
              'Il tuo posto per film',
              1500,
              'Il tuo posto per serie',
              1500,
              'Il tuo posto per contenuti esclusivi',
              1500,
              'Il tuo posto per classici',
              1500,
              'Il tuo posto per nuove uscite',
              1500
            ]}
            cursor={false}
            repeat={Infinity}
            preRenderFirstString={false}
          />
        </SubtitleText>
      </SubtitleSection>
      <WatchNowSection>
        <AnimatedContent
          distance={40}
          direction="vertical"
          animateOpacity
          ease="power3.out"
          delay={0.3}
        >
          <Link href={"/home"} style={{ textDecoration: "none" }}>
            <ButtonWatchNow>
              <MdPlayArrow size={20} />
              Scopri i film
            </ButtonWatchNow>
          </Link>
        </AnimatedContent>
      </WatchNowSection>
    </MainContent>
  )
}