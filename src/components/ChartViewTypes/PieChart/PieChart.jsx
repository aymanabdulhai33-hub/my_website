import { Pie } from "@ant-design/plots";
import * as S from '../styled'

const PieChart = ({data , xField , yField , width , height , maxLabelNumber , colors , itemLabelFill}) => {
   
    const config = {
        data,
        appendPadding: 80,
        height: height || 460,
        autoFit: true,
        colorField: xField,
        angleField: yField,
        padding: 50,
        ...(data?.length < (maxLabelNumber == 0 || maxLabelNumber ? maxLabelNumber : 20) ? {label:{
            text: yField,
        }}: {}),
        interactions: [
          {
            type: 'pie-legend-active',
          },
          {
            type: 'element-active',
          },
        ],
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
          inset: 2,
          radius: 10,
        },
      };

    return(
        <S.Wrapper height={height}>
            <Pie {...config} />
        </S.Wrapper>
    )
}

export default PieChart