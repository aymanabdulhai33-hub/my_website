import { LineChartOutlined, ScheduleOutlined } from '@ant-design/icons'
import * as S from './styled'
import React from 'react'

const AppointmentCalendar = () => {
  return (
    <S.Wrapper style={{display:'flex' , justifyContent:'center' , alignItems: 'center' , flexDirection:'column' , gap: '5px'}}>
        <p className="Title">Appointment Calendar</p>
        <ScheduleOutlined />
    </S.Wrapper>
  )
}

export default AppointmentCalendar