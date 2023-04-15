import styled from "styled-components";

function ResultOuput({
  tipPerson,
  totalPerson,
  setnumbpeople,
  settipPerson,
  settotalPerson,
  setbill,
  setpercent,
}) {
  const Reset = () => {
    setnumbpeople(0);
    settipPerson("0.00");
    settotalPerson("0.00");
    setbill("0");
    setpercent(0);
  };
  return (
    <OutputContainer>
      <DestinationContainer>
        <Container>
          <Destination>
            <h4>Tip Amount</h4>
            <p>/ person</p>
          </Destination>
          <h1>{tipPerson}</h1>
        </Container>
        <Container>
          <Destination>
            <h4>Total</h4>
            <p>/ person</p>
          </Destination>
          <h1>{totalPerson}</h1>
        </Container>
      </DestinationContainer>
      <button onClick={Reset}>Reset</button>
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
    gap: 0;
    justify-content: space-between;
  }
  button {
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    width: 265px;
    height: 48px;
    background-color: #26c2ae;
    color: #00474b;
    border: none;
    border-radius: 5px;
    font-family: "Space Mono", monospace;
    font-weight: 700;
    cursor: pointer;

    @media screen and (min-width: 1024px) {
      width: 100%;
      background-color: #0d686d;

      :hover {
        background-color: #9fe8df;
      }
    }
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
`;

const Destination = styled.div`
  display: flex;
  flex-direction: column;
`;
