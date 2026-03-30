import react from "react";
import styled from "styled-components";


export const Wrapper = styled.div`
display: flex;
align-items: center;
gap: 5px;
width: 100%;
.Title{
  color: var(--builder-fontDark);
}
.Icon{
  fill: var(--builder-fontDark);
}
.IconStroke{
  fill: var(--builder-fontDark);
}
&:hover{
.Title{
  color: ${(p) => p.theme.ligtBtn};
}
.Icon{
  fill: ${(p) => p.theme.ligtBtn};
}
.IconStroke{
  fill: ${(p) => p.theme.ligtBtn};
}
}

`;


