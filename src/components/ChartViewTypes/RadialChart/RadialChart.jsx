import { Pie } from "@ant-design/plots";
import * as S from '../styled'

const RadialChart = ({data , xField , yField , width , height , maxLabelNumber , colors , itemLabelFill}) => {
    
    const config = {
        data,
        colorField: xField,
        angleField: yField,
        innerRadius: 0.5,
        style: {
          // padding: '30px 20px'
        },
        ...(data?.length < (maxLabelNumber == 0 ? maxLabelNumber : maxLabelNumber ? maxLabelNumber : 20) ? {label: {
          text: yField,
        }}: {}),
        scale: {
          color: {range : colors}
        },
        legend: {
          color: {
            itemLabelFill: itemLabelFill, 
          },
        },
        axis: {
            x: {
                labelFill: itemLabelFill,
                labelOpacity: 0.8
            },
            y: {
                labelFill: itemLabelFill,
                labelOpacity: 0.8
            },
        },
        style: {
          inset: 1,
          radius: 10,
        },
      };

    return(
        <S.Wrapper height={height}>
            <Pie {...config} />
        </S.Wrapper>
    )
}

export default RadialChart