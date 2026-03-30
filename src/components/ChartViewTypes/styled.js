import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: ${(p) => (p.height ? "" : "500px")};
  @media (max-width: 700px) {
    width: 100%;
  }
`;
