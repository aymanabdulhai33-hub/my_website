import React from "react";

export const BackgroundPositionOptions = () => {

    return(
        [
            { name: 'Top Left', value: 'top left' },
            { name: 'Top Center', value: 'top center' },
            { name: 'Top Right', value: 'top right' },
            { name: 'Center Left', value: 'center left' },
            { name: 'Center Center', value: 'center center' },
            { name: 'Center Right', value: 'center right' },
            { name: 'Bottom Left', value: 'bottom left' },
            { name: 'Bottom Center', value: 'bottom center' },
            { name: 'Bottom Right', value: 'bottom right' },
            { name: 'Custom Position 1', value: '50% 50%' },
            { name: 'Custom Position 2', value: '25% 25%' },
            { name: 'Custom Position 3', value: '75% 75%' },
            { name: 'Custom Position 4', value: '10% 90%' }
        ]      
       
    )
}

export const BackgroundSizenOptions = () => {

    return(
        [
            { name: 'Auto', value: 'auto' },
            { name: 'Cover', value: 'cover' },
            { name: 'Contain', value: 'contain' },
            { name: 'Initial', value: 'initial' },
            { name: 'Inherit', value: 'inherit' },
            { name: '100% 100%', value: '100% 100%' },
            { name: '50% 50%', value: '50% 50%' },
            { name: '25% 25%', value: '25% 25%' },
            { name: '100% Auto', value: '100% auto' },
            { name: 'Auto 100%', value: 'auto 100%' },
            { name: '50% Auto', value: '50% auto' },
            { name: 'Auto 50%', value: 'auto 50%' },
        ]      
       
    )
}

export const BackgroundAttachmentOptions = () => {

    return(
        [
            { name: 'Scroll', value: 'scroll' },
            { name: 'Fixed', value: 'fixed' },
            { name: 'Local', value: 'local' }
        ]      
       
    )
}

const BackgroundRepeatOptions = () => {

    return(
        [
            { name: 'No Repeat', value: 'no-repeat' },
            { name: 'Repeat', value: 'repeat' },
            { name: 'Repeat X', value: 'repeat-x' },
            { name: 'Repeat Y', value: 'repeat-y' },
            { name: 'Space', value: 'space' },
            { name: 'Round', value: 'round' }
          ]      
       
    )
}

export default BackgroundRepeatOptions