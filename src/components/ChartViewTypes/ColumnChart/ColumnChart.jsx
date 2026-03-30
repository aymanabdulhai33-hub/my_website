import { Column } from "@ant-design/plots";
import * as S from '../styled'

const ColumnChart = ({data , xField , yField , width , height , maxLabelNumber , colors , itemLabelFill}) => {

    function transformData(array) {
      return array.flatMap(item => [
        { [xField]: item?.[xField], type: yField?.[0] , value: item[yField?.[0]] },
        { [xField]: item?.[xField], type: yField?.[1] , value: item[yField?.[1]] }
      ]);
    }

    var FixData = Array.isArray(yField) && yField?.length > 1 ? 
      transformData(data)
    : data

    const config = {
        data: FixData,
        height: height || 460 ,
        autoFit: true,
        xField: xField,
        yField: Array.isArray(yField) && yField?.length > 1 ? 'value' : yField ,
        ...(Array.isArray(yField) && yField?.length > 1 ? 
        {seriesField: 'type'}
        : {}),
        colorField: Array.isArray(yField) && yField?.length > 1 ? 'type' : xField,
        ...(FixData?.length < (Array.isArray(yField) && yField?.length > 1 ? 40 : maxLabelNumber || maxLabelNumber == 0 ? maxLabelNumber : 20) ? { label:{
          text: Array.isArray(yField) && yField?.length > 1 ? 'value' :  yField,
          textBaseline: 'bottom',
        }}: {}),
        style: {
          padding: '30px 20px',
        },
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
          radiusTopLeft: 15,
          radiusTopRight: 15,
        },
      };


    return(
        <S.Wrapper key={yField} height={height}>
          <Column {...config} />
        </S.Wrapper>
    )
}

export default ColumnChart