import { Area } from "@ant-design/plots";
import * as S from '../styled'

const AreaChart = ({data , xField , yField , width , height , maxLabelNumber , colors , itemLabelFill,chartTheme}) => {

    const config = {
        data,
        height: height || 460 ,
        autoFit: true,
        xField: xField,
        yField: yField,
        shapeField: 'smooth',
        ...(data?.length < (maxLabelNumber == 0 || maxLabelNumber ? maxLabelNumber : 20) ? {label:{
            text: yField,
            style: {
              dx: 10
            },
        }}: {}),
        point: {
          sizeField: 5,
          // shape: 'diamond',
          style: {
            stroke: chartTheme[0],
            lineWidth: 2,
            // fill: '#1890FF',
          },
        },
        graphic: {
            fill: '#F87171',
            shadowColor: '#F87171'
        },
        style: {
          fill: `linear-gradient(-90deg, white 0%, ${chartTheme[0]} 100%)`,
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
      };

    return(
        <S.Wrapper height={height}>
            <Area {...config} />
        </S.Wrapper>
    )
}

export default AreaChart