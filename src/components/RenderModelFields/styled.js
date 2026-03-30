import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  .default-form-input-wrapper {
    width: ${(p) =>
      p?.isMobile
        ? "100%"
        : p?.mainDivWidth && p?.mainDivWidth <= 400
        ? "100%"
        : "250px"};
    margin-bottom: auto !important;
  }

  .default-form-input-wrapper.full-width {
    width: 100%;
  }

  .default-input {
    width: 100%;
    border-width: 2px;
    background-color: ${(p) => p?.siteTheme?.input_bg_color};
    border: ${(p) =>
      `${p?.siteTheme?.input_border_size || "1px"} solid ${
        p?.siteTheme?.input_border_color
      }`};
    border-radius: ${(p) => p?.siteTheme?.input_border_radius};
  }

  @media (max-width: 400px) {
    .default-form-input-wrapper {
      width: 100%;
    }
  }
`;
