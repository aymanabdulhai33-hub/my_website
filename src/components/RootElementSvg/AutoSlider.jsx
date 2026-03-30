import { LineChartOutlined } from '@ant-design/icons'
import * as S from './styled'
import React from 'react'

const AutoSlider = () => {
  return (
    <S.Wrapper style={{display:'flex' , justifyContent:'center' , alignItems: 'center' , flexDirection:'column' , gap: '5px'}}>
        <p className="Title">Auto Slider</p>
        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
        <path className="IconStroke" d="M8 18C5.17157 18 3.75736 18 2.87868 17.1213C2 16.2426 2 14.8284 2 12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6L16 6C18.8284 6 20.2426 6 21.1213 6.87868C22 7.75736 22 9.17157 22 12C22 14.8284 22 16.2426 21.1213 17.1213C20.2426 18 18.8284 18 16 18H8Z"
        stroke="#ffffff" strokeWidth="1.5"></path>
        <path className="IconStroke" d="M4.5 3L19.5 3" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
        <path className="IconStroke" d="M4.5 21L19.5 21" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
        </g></svg>
    </S.Wrapper>
  )
}

export default AutoSlider