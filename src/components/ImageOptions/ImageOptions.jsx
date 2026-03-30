import React from "react";

const ImageRenderingOptions = () => {

    return(
    [
        { name: 'Auto', value: 'auto' },
        { name: 'Optimize Speed', value: 'optimizeSpeed' },
        { name: 'Optimize Quality', value: 'optimizeQuality' },
        { name: 'Pixelated', value: 'pixelated' },
        { name: 'Crisp Edges', value: 'crisp-edges' },
        { name: 'Inherit', value: 'inherit' },
        { name: 'Initial', value: 'initial' },
        { name: 'Unset', value: 'unset' },
    ]      
    )
}

export const ImageOrientationOptions = () => {

    return(
    [
        { name: 'None', value: 'none' },
        { name: 'Flip', value: 'flip' },
        { name: 'Flip X', value: 'flip-x' },
        { name: 'Flip Y', value: 'flip-y' },
        { name: 'From Image', value: 'from-image' },
        { name: 'Inherit', value: 'inherit' },
        { name: 'Initial', value: 'initial' },
        { name: 'Revert', value: 'revert' },
        { name: 'Unset', value: 'unset' }
    ]      
    )
}

export const ObjectPositionOptions = () => {

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
    ]      
    )
}

export const OpacityOptions = () => {

    return(
    [
        { name: 'Opaque', value: '1' },
        { name: 'Semi-Transparent', value: '0.75' },
        { name: 'Transparent', value: '0.5' },
        { name: 'Very Transparent', value: '0.25' },
        { name: 'Fully Transparent', value: '0' }
    ]      
    )
}

export const ObjectFitOptions = () => {

    return(
    [
        { name: 'Fill', value: 'fill' },
        { name: 'Contain', value: 'contain' },
        { name: 'Cover', value: 'cover' },
        { name: 'None', value: 'none' },
        { name: 'Scale Down', value: 'scale-down' }
    ]      
    )
}
export default ImageRenderingOptions