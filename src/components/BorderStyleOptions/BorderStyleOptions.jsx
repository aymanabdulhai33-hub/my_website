import React from "react";


export const BorderRadiusOptions = () => {
    return(
    [
        { name: 'None', value: '0' },
        { name: 'Slightly Rounded', value: '4px' },
        { name: 'Moderately Rounded', value: '8px' },
        { name: 'Rounded', value: '12px' },
        { name: 'Very Rounded', value: '16px' },
        { name: 'Circular', value: '50%' } 
    ]      
    )
}

export const BoxShadowOptions = () => {
    return(
    [
        { name: 'None', value: 'none' },
        { name: 'Small', value: '0 1px 2px rgba(0, 0, 0, 0.1)' },
        { name: 'Medium', value: '0 3px 6px rgba(0, 0, 0, 0.15)' },
        { name: 'Large', value: '0 10px 20px rgba(0, 0, 0, 0.2)' },
        { name: 'X-Large', value: '0 15px 30px rgba(0, 0, 0, 0.25)' },
        { name: 'Inset', value: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)' },
        { name: 'Outline', value: '0 0 0 3px rgba(0, 123, 255, 0.5)' },
        { name: 'Bottom', value: '0 4px 4px rgba(0, 0, 0, 0.2)' },
        { name: 'Left', value: '-4px 0 4px rgba(0, 0, 0, 0.2)' },
        { name: 'Right', value: '4px 0 4px rgba(0, 0, 0, 0.2)' },
        { name: 'Top', value: '0 -4px 4px rgba(0, 0, 0, 0.2)' },
        { name: 'Bottom Left', value: '-4px 4px 4px rgba(0, 0, 0, 0.2)' },
        { name: 'Bottom Right', value: '4px 4px 4px rgba(0, 0, 0, 0.2)' },
        { name: 'Soft', value: '0 5px 15px rgba(0, 0, 0, 0.1)' },
        { name: 'Hard', value: '0 5px 5px rgba(0, 0, 0, 0.3)' },
        { name: 'Double', value: '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)' },
        { name: 'Triple', value: '0 1px 2px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)' },
        { name: 'Glow', value: '0 0 10px rgba(255, 255, 255, 0.5)' },
        { name: 'Drop Shadow', value: '0 5px 10px rgba(0, 0, 0, 0.5)' },
        { name: 'Deep', value: '0 10px 20px rgba(0, 0, 0, 0.35)' },
        { name: 'Highlight', value: '0 -5px 10px rgba(255, 255, 255, 0.5)' },
        { name: 'Focus', value: '0 0 5px rgba(0, 0, 0, 0.3)' },
        { name: 'Inset Soft', value: 'inset 0 3px 6px rgba(0, 0, 0, 0.2)' },
        { name: 'Frosted', value: '0 0 15px rgba(255, 255, 255, 0.8)' },
        { name: 'Text Shadow', value: '2px 2px 4px rgba(0, 0, 0, 0.5)' },
        { name: 'Neumorphism', value: '10px 10px 20px rgba(0, 0, 0, 0.2), -10px -10px 20px rgba(255, 255, 255, 0.7)' },
        { name: 'Flat', value: '0 4px 2px -2px rgba(0, 0, 0, 0.2)' },
        { name: 'Floating', value: '0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)' },
        { name: 'Gradient', value: '0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.2)' },
        { name: 'Card', value: 'rgba(25, 42, 89, 0.25) 0px 18px 50px -15px ' }     
            
    ]      
    )
}



const BorderStyleOptions = () => {

    return(
    [
        { name: 'None', value: 'none' },
        { name: 'Solid', value: 'solid' },
        { name: 'Dotted', value: 'dotted' },
        { name: 'Dashed', value: 'dashed' },
        { name: 'Double', value: 'double' },
        { name: 'Groove', value: 'groove' },
        { name: 'Ridge', value: 'ridge' },
        { name: 'Inset', value: 'inset' },
        { name: 'Outset', value: 'outset' } 
    ]      
    )
}
export default BorderStyleOptions

