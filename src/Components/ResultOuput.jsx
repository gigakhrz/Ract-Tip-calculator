import styled from "styled-components";
function ResultOuput({
  tipPerson,
  totalPerson,
  setnumbpeople,
  settipPerson,
  settotalPerson,
  setbill,
  setpercent,
  butCollor,
  setbutCollor,
}) {
  const Reset = () => {
    setnumbpeople("");
    settipPerson("0.00");
    settotalPerson("0.00");
    setbill("");
    setpercent("");
    setbutCollor("#0D686D");
  };
  return (
    <OutputContainer>
      <DestinationContainer>
        <Container>
          <Destination>
            <h4>Tip Amount</h4>
            <p>/ person</p>
          </Destination>
          <h1>
            $
            {isNaN(tipPerson) || !isFinite(tipPerson)
              ? "0.00"
              : Number(tipPerson).toFixed(2)}
          </h1>
        </Container>
        <Container>
          <Destination>
            <h4>Total</h4>
            <p>/ person</p>
          </Destination>
          <h1>
            $
            {isNaN(totalPerson) || !isFinite(totalPerson)
              ? "0.00"
              : Number(totalPerson).toFixed(2)}
          </h1>
        </Container>
      </DestinationContainer>
      <ResetButton butCollor={butCollor} onClick={Reset}>
        Reset
      </ResetButton>
    </OutputContainer>
  );
}

const OutputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background-color: #00474b;
  padding: 37px 24px 24px;
  border-radius: 15px;

  @media screen and (min-width: 1024px) {
    padding: 40px;
    gap: 122px;
  }
`;

export default ResultOuput;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  h4 {
    font-size: 16px;
    line-height: 24px;
    color: white;
  }
  p {
    font-size: 13px;
    line-height: 19px;
    color: #7f9d9f;
  }
`;

const DestinationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  h1 {
    font-size: 32px;
    line-height: 47px;
    letter-spacing: -0.67px;
    text-align: right;
    color: #26c2ae;
  }

  @media screen and (min-width: 1024px) {
    height: 100%;
    justify-content: space-between;
  }
`;

const Destination = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResetButton = styled.button`
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  width: 265px;
  height: 48px;
  background: ${(props) => props.butCollor};
  color: #00474b;
  border: none;
  border-radius: 5px;
  font-family: "Space Mono", monospace;
  font-weight: 700;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    width: 100%;
    background: ${(props) => props.butCollor};
  }

  :hover {
    background-color: #9fe8df;
  }
`;
