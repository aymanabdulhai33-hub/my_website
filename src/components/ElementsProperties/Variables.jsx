import React from "react";
import usePage from "../../contexts/usePage/usePage";
import VariablesForm from "./VariablesForm";

const Variables = () => {
    const {pageVariables} = usePage()

    return(
        <div className="global-scroll-y" style={{maxHeight:'700px'}}>
            <div>
                <VariablesForm />
            </div>
            {pageVariables?.map((variable , index) => {
                return(
                    <React.Fragment key={index}>
                        <hr style={{marginTop:'20px'}}/>
                        <VariablesForm variable={variable} key={index}/>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default Variables