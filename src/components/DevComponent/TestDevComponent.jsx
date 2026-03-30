import React from "react";

const TestDevComponent = ({element , item}) => {
    // console.log(item)

    return(
        <div>
            {item?.name_test}
        </div>
    )
}

export default TestDevComponent