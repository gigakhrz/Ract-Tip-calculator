import { useState } from "react";
import GlobalStyles from "./GlobaStyles";
import styled from "styled-components";
import logoImg from "/public/logo.svg";
import Calculate from "./Components/Calculate";

function App() {
  return (
    <Main>
      <GlobalStyles />
      <img src={logoImg} alt="logo" />
      <ParentDiv>
        <Calculate />
      </ParentDiv>
    </Main>
  );
}

export default App;

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40.86px;
`;

const ParentDiv = styled.div`
  width: 375px;
  height: 100%;
  padding:32px;
  background-color: white;
  background: #ffffff;
  box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
  border-radius: 25px 25px 0px 0px;
  display:flex;
  flex-direction:column;
  align-items;center;
  gap:32px;
`;
