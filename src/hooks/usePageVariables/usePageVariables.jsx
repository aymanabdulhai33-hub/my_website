import React, { useState } from "react";

const usePageVariables = ({page}) => {
    var pageVariables = page?.variables || []
    var allVar = {}
    pageVariables?.map((variable) => {
        if(variable?.type == "object"){
            allVar[variable?.name] = {}
        }else if(variable?.type == "string"){
            allVar[variable?.name] = ''
        }else if(variable?.type == "array"){
            allVar[variable?.name] = []
        }
    })
    return allVar
}

export default usePageVariables