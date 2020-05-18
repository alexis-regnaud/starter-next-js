/* pages/index.js */
import React, { useState } from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <div className="container-fluid">
      <Title>My First Next.js Page</Title>
    </div>
  );
}

const Title = styled.h1`
  color: red;
`;
