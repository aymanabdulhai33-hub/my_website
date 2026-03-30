import { Bar } from "@ant-design/plots";
import * as S from '../styled'

const BarChart = ({data , xField , yField , width , height , maxLabelNumber , colors , itemLabelFill}) => {

    const config = {
        data,
        height: height || 460 ,
        autoFit: true,
        xField: xField,
        yField: yField,
        colorField: xField,
        ...(data?.length < (maxLabelNumber == 0 || maxLabelNumber ? maxLabelNumber : 20) ? {label:{
            text: yField,
            dx: -3,
            style: {
                fill: '#e6e6e6'
            }
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
          radiusTopLeft: 8,
          radiusTopRight: 8,
        },
      };
    return(
        <S.Wrapper height={height}>
            <Bar {...config} />
        </S.Wrapper>
    )
}

export default BarChart