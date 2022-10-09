import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  width: 600px;
  height: 400px;
  background-color: #f5f5f5;
`;

const Child = styled.div`
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  background-color: rgb(141, 200, 145);
`;

const ViewBox = ({ childrenLength = 5, parentStyle }) => {
  const children = new Array(childrenLength).fill(null);
  return (
    <Wrapper style={{ gap: "10px", ...parentStyle }}>
      {children.map((_, index) => (
        <Child key={index}>{index}</Child>
      ))}
    </Wrapper>
  );
};

export default ViewBox;
