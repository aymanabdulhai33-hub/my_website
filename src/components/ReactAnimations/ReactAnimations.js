import React from "react";
import styled, { keyframes } from "styled-components";
import {
  merge,
  bounceIn,
  bounceInUp,
  bounceInRight,
  fadeInDown,
  fadeInUp,
  fadeIn,
  fadeInLeft,
  fadeInRight,
  flipInX,
  flipInY,
  slideInUp,
  rollIn,
  pulse,
  rotateIn,
  rotateInDownRight,
  slideInDown,
  slideInLeft,
  slideInRight,
  slid,
  zoomIn,
  zoomInDown,
  zoomInLeft,
  zoomInRight,
  zoomInUp,
  flip,
  flipOutY,
  flipOutX,
} from "react-animations";
export const Time = "0.5s";
const FlipUpDown = merge(flipInX, flipInY);
const FlipRightLeft = merge(flipInY, flipInY);
const BounceInUp = merge(bounceInUp, bounceIn);
const SlideDownUp = merge(slideInUp, slideInUp);
const FadeUpDown = merge(fadeInUp, fadeInUp);
const FadeDownUp = merge(fadeInDown, fadeInDown);
const FadeLeftRight = merge(fadeInLeft, fadeIn);
const FadeRightLeft = merge(fadeInRight, fadeIn);
const BounceRightLeft = merge(bounceInRight, bounceIn);
const RollLeftRight = merge(rollIn, fadeIn);
const Pulse = merge(pulse, pulse);
const RotateCenter = merge(fadeIn, rotateIn);
const RollRightLeft = merge(fadeIn, rotateInDownRight);
const SlideInLeft = merge(slideInLeft, slid);
const SlideInRight = merge(slideInRight, slid);
const slideTopDown = merge(slideInDown, slid);
const ZoomOutIn = merge(zoomInDown, zoomIn);
const ZoomRightIn = merge(zoomInRight, zoomIn);
const ZoomDownIn = merge(zoomInUp, zoomIn);
const ZoomLeftIn = merge(zoomInLeft, zoomIn);
const ZoomRotateCenter = merge(rotateIn, zoomIn);
export const zoomInOnly = keyframes`${zoomIn}`;
export const AniFlipUpDown = keyframes`${FlipUpDown}`;
export const AniFlipRightLeft = keyframes`${FlipRightLeft}`;
export const AniBounceInUp = keyframes`${BounceInUp}`;
export const AniBounceRightLeft = keyframes`${BounceRightLeft}`;
export const AniFadeUpDown = keyframes`${FadeUpDown}`;
export const AniFadeDownUp = keyframes`${FadeDownUp}`;
export const AniFadeLeftRight = keyframes`${FadeLeftRight}`;
export const AniFadeRightLeft = keyframes`${FadeRightLeft}`;
export const AniRollLeftRight = keyframes`${RollLeftRight}`;
export const AniRollRightLeft = keyframes`${RollRightLeft}`;
export const AniPulse = keyframes`${Pulse}`;
export const AniRotateCenter = keyframes`${RotateCenter}`;
export const AniSlideDownUp = keyframes`${SlideDownUp}`;
export const AniSlideInLeft = keyframes`${SlideInLeft}`;
export const AniSlideInRight = keyframes`${SlideInRight}`;
export const AnislideTopDown = keyframes`${slideTopDown}`;
export const AniZoomOutIn = keyframes`${ZoomOutIn}`;
export const AniZoomRightIn = keyframes`${ZoomRightIn}`;
export const AniZoomDownIn = keyframes`${ZoomDownIn}`;
export const AniZoomLeftIn = keyframes`${ZoomLeftIn}`;
export const AniZoomRotateCenter = keyframes`${ZoomRotateCenter}`;

export const Animations = [
  { name: "Zoom In", value: zoomInOnly },
  { name: "Flip Up-Down", value: AniFlipUpDown },
  { name: "Flip Right-Left", value: AniFlipRightLeft },
  { name: "Bounce In Up", value: AniBounceInUp },
  { name: "Fade Up-Down", value: AniFadeUpDown },
  { name: "Fade Down-Up", value: AniFadeDownUp },
  { name: "Bounce Right-Left", value: AniBounceRightLeft },
  { name: "Fade Left-Right", value: AniFadeLeftRight },
  { name: "Fade Right-Left", value: AniFadeRightLeft },
  { name: "Roll Left-Right", value: AniRollLeftRight },
  { name: "Roll Right-Left", value: AniRollRightLeft },
  { name: "Pulse", value: AniPulse },
  { name: "Rotate Center", value: AniRotateCenter },
  { name: "Slide Down-Up", value: AniSlideDownUp },
  { name: "Slide In Left", value: AniSlideInLeft },
  { name: "Slide In Right", value: AniSlideInRight },
  { name: "Slide Top-Down", value: AnislideTopDown },
  { name: "Zoom Out-In", value: AniZoomOutIn },
  { name: "Zoom Right-In", value: AniZoomRightIn },
  { name: "Zoom Down-In", value: AniZoomDownIn },
  { name: "Zoom Left-In", value: AniZoomLeftIn },
  { name: "Zoom Rotate Center", value: AniZoomRotateCenter },
];
