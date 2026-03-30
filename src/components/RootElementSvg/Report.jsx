import { LineChartOutlined } from '@ant-design/icons'
import * as S from './styled'
import React from 'react'

const ReportDetils = () => {
  return (
    <S.Wrapper style={{display:'flex' , justifyContent:'center' , alignItems: 'center' , flexDirection:'column' , gap: '5px'}}>
        <p className="Title">Report</p>
        <LineChartOutlined className="Title" />
    </S.Wrapper>
  )
}

export default ReportDetils