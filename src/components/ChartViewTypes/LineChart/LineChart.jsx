import { Line } from "@ant-design/plots";
import * as S from '../styled'

const LineChart = ({data , xField , yField , width , height , maxLabelNumber , colors , itemLabelFill,chartTheme}) => {

    const config = {
        data,
        height: height || 460 ,
        autoFit: true,
        xField: xField,
        yField: yField,
        shapeField: 'smooth',
        ...(data?.length < maxLabelNumber ? {label:{
          text: yField,
          textBaseline: 'bottom',
          style: {
            fill: 'black',
            margin: 20,
            dx: 10
          },
        }}: {}),
        line: {
          style: {
            stroke: chartTheme[0],
            lineWidth: 1,
          },
        },
        point: {
          sizeField: 5,
          // shape: 'diamond',
          style: {
            stroke: chartTheme[0],
            lineWidth: 2,
            // fill: '#1890FF',
          },
        },
        style: {
          padding: '30px 20px'
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
      };

    return(
        <S.Wrapper height={height}>
            <Line {...config} />
        </S.Wrapper>
    )
}

export default LineChart