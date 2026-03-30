import { LineChartOutlined, SlidersFilled } from '@ant-design/icons'
import * as S from './styled'
import React from 'react'

const BannerSlider = () => {
  return (
    <S.Wrapper style={{display:'flex' , justifyContent:'center' , alignItems: 'center' , flexDirection:'column' , gap: '5px'}}>
        <p className="Title">Banner Slider</p>
        <svg fill="transparent" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
        <path className="IconStroke" d="M16 3H8c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM2 7v10c0 1.103.897 2 2 2V5c-1.103 0-2 .897-2 2zm18-2v14c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z"></path>
        </g></svg>
    </S.Wrapper>
  )
}

export default BannerSlider