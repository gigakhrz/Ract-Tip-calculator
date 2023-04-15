import { useState } from "react";
import styled from "styled-components";
import logoImg from "/public/logo.svg";
import Calculate from "./Components/Calculate";
import ResultOuput from "./Components/ResultOuput";

function App() {
  const [bill, setbill] = useState(0);
  const [percent, setpercent] = useState(0);
  const [numbpeople, setnumbpeople] = useState(0);
  const [tipPerson, settipPerson] = useState("0.00");
  const [totalPerson, settotalPerson] = useState("0.00");
  return (
    <Main>
      <img src={logoImg} alt="logo" />
      <ParentDiv>
        <Calculate
          percent={percent}
          setpercent={setpercent}
          bill={bill}
          setbill={setbill}
          numbpeople={numbpeople}
          setnumbpeople={setnumbpeople}
          settipPerson={settipPerson}
          settotalPerson={settotalPerson}
        />
        <ResultOuput
          tipPerson={tipPerson}
          totalPerson={totalPerson}
          setnumbpeople={setnumbpeople}
          settipPerson={settipPerson}
          settotalPerson={settotalPerson}
          setbill={setbill}
          setpercent={setpercent}
        />
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
  align-items:center;
  gap:32px;

  @media screen and (min-width:1024px){
    flex-direction:row;
    border-radius: 25px;
    width:920px;
  }
  
`;
