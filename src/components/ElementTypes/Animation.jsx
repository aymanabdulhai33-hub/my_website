import { t } from "i18next";
import React from "react";
import GlobalSelect from "../GlobalSelect/GlobalSelect";
import usePage from "../../contexts/usePage/usePage";
import { Animations } from "../ReactAnimations/ReactAnimations";

const Animation = ({element}) => {
    const {updatePageElement} = usePage()

    const handleChangeAnimation = (e) => {
        var newValue = {
            animation_name: e || ''
        }
        updatePageElement({element , dataObject: newValue})
    }

    return(
        <div style={{width:'550px'}}>
            <p>{t('animation type')}</p>
            <GlobalSelect
                defaultValue={element?.animation_name}
                onChange={handleChangeAnimation}
                style={{width:'250px'}}
                options={Animations?.map((item) => {
                    return{
                        label: item?.name,
                        value: item?.name
                    }
                }) || []}
            />
        </div>
    )
}

export default Animation