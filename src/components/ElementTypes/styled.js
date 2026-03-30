import React from "react";
import styled from "styled-components";
import {
  AniBounceInUp,
  AniBounceRightLeft,
  AniFadeDownUp,
  AniFadeLeftRight,
  AniFadeRightLeft,
  AniFadeUpDown,
  AniFlipRightLeft,
  AniFlipUpDown,
  AniPulse,
  AniRollLeftRight,
  AniRollRightLeft,
  AniRotateCenter,
  AniSlideDownUp,
  AniSlideInLeft,
  AniSlideInRight,
  AnislideTopDown,
  AniZoomDownIn,
  AniZoomLeftIn,
  AniZoomOutIn,
  AniZoomRightIn,
  AniZoomRotateCenter,
  zoomInOnly,
} from "../ReactAnimations/ReactAnimations";

export const AnimationsObj = {
  ["Zoom In"]: zoomInOnly,
  ["Flip Up-Down"]: AniFlipUpDown,
  ["Flip Right-Left"]: AniFlipRightLeft,
  ["Bounce In Up"]: AniBounceInUp,
  ["Fade Up-Down"]: AniFadeUpDown,
  ["Fade Down-Up"]: AniFadeDownUp,
  ["Bounce Right-Left"]: AniBounceRightLeft,
  ["Fade Left-Right"]: AniFadeLeftRight,
  ["Fade Right-Left"]: AniFadeRightLeft,
  ["Roll Left-Right"]: AniRollLeftRight,
  ["Roll Right-Left"]: AniRollRightLeft,
  ["Pulse"]: AniPulse,
  ["Rotate Center"]: AniRotateCenter,
  ["Slide Down-Up"]: AniSlideDownUp,
  ["Slide In Left"]: AniSlideInLeft,
  ["Slide In Right"]: AniSlideInRight,
  ["Slide Top-Down"]: AnislideTopDown,
  ["Zoom Out-In"]: AniZoomOutIn,
  ["Zoom Right-In"]: AniZoomRightIn,
  ["Zoom Down-In"]: AniZoomDownIn,
  ["Zoom Left-In"]: AniZoomLeftIn,
  ["Zoom Rotate Center"]: AniZoomRotateCenter,
};

export const Wrapper = styled.div`
  animation: 0.7s ${(p) => AnimationsObj[p.an] || ""} ease-in-out;
`;
