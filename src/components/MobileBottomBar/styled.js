import React from "react";
import styled from "styled-components";

export const PageItem = styled.div`
  width: 60px;
  max-width: 60px;
  cursor: pointer;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  display: flex;
  color: var(--font_dark);
  padding-top: 5px;
  &:hover {
    color: var(--font_light);
  }
`;
