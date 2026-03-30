import react from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  .Title {
    color: ${(p) => p.theme.bgColor};
    font-size: 11px;
    width: initial;
    text-align: center;
  }
  .Icon {
    fill: ${(p) => p.theme.bgColor};
  }
  .IconStroke {
    stroke: ${(p) => p.theme.bgColor};
  }
  &:hover {
    .Title {
      color: ${(p) => p.theme.ligtBtn};
    }
    .Icon {
      fill: ${(p) => p.theme.ligtBtn};
    }
    .IconStroke {
      stroke: ${(p) => p.theme.ligtBtn};
    }
  }
`;
