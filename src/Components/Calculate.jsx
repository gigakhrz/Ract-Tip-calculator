import { useState } from "react";
import styled from "styled-components";

function Calculate() {
  return (
    <CalculateContainer>
      <BillConatainer>
        <h3>Bill</h3>
        <input type="number" id="bill" placeholder="0" />
      </BillConatainer>
    </CalculateContainer>
  );
}

const CalculateContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items;center;

    //styles for every input and label
    h3{
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #5e7a7d;
    }

    input{
        background: #f3f9fa;
        border-radius: 5px;
        border: 0;
        width: 311px;
        height: 48px;
        padding: 17px;
        text-align: right;
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        text-align: right;
        color: #00474b;
        background-image:url(./public/icon-dollar.svg)
    }
`;

// for bill input
const BillConatainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export default Calculate;
