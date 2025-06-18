'use client'

import Link from "next/link";
import styled from "styled-components";
import '@fontsource/prompt/500.css';
import { MOBILEBREAKPOINT, TITLE, VERSIONE } from "@/lib/constants";

const NavigationBar = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  /* background-color: red; */

  @media (max-width: ${MOBILEBREAKPOINT}) {
    padding: 0;
    height: auto;
  }
`;

const AppNameWrapper = styled.div`
  padding: 20px;
  box-sizing: border-box;
`;


const AppName = styled.span`
  color: white;
  font-family: 'Prompt', sans-serif;
  font-weight: 500;
  font-size: 25px;

  @media (max-width: ${MOBILEBREAKPOINT}) {
    font-size: 20px;
  }
`;

const VersionNumber = styled.span`
  color: white;
  font-family: 'Prompt', sans-serif;
  font-weight: 500;
  font-size: 15px;
  margin-left: 4px;

  @media (max-width: ${MOBILEBREAKPOINT}) {
    font-size: 10px;
  }
`;

const Social = styled.div`
  padding: 20px;
  box-sizing: border-box;
`;

const ButtonAccount = styled.div`
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

export default function Navbar() {
  return (
    <NavigationBar>
      <AppNameWrapper>
        <AppName>
          <Link href="/">
            {TITLE}
            <VersionNumber>
              v{VERSIONE}
            </VersionNumber>
          </Link>
        </AppName>
      </AppNameWrapper>
      <Social>
        <Link href="/profile">
          <ButtonAccount>
            Account
          </ButtonAccount>
        </Link>
      </Social>
    </NavigationBar>
  )
}