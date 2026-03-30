import { Funnel } from "@ant-design/plots";
import * as S from '../styled'

const FunnelChart = ({data , xField , yField , width , height}) => {

    const config = {
        data,
        height: height || 460 ,
        autoFit: true,
        xField: xField,
        yField: yField,
       // color: theme.dark,
        // conversionTag: {offsetX: 200, offsetY: 0, formatter: (datum) => 'Rate ' + datum[yField] * 100 + '%' , style: {
        //     width: '500px',
        //     background:'red'
        // }},
        hape: 'pyramid',
        style: {
          padding: '30px 20px'
        }
      };
    return(
        <S.Wrapper>
            <Funnel {...config} />
        </S.Wrapper>
    )
}

export default FunnelChart