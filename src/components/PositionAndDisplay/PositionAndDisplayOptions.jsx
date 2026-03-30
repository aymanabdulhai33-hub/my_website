import React from "react";

export const AlignItems = () => {

    return(
    [
        { name: 'Flex Start', value: 'flex-start' },
        { name: 'Flex End', value: 'flex-end' },
        { name: 'Center', value: 'center' },
        { name: 'Baseline', value: 'baseline' },
        { name: 'Stretch', value: 'stretch' } 
    ]      
    )
}

export const DisplayOptions = () => {

    return(
    [
        { name: 'Block', value: 'block' },
        { name: 'Inline', value: 'inline' },
        { name: 'Inline-Block', value: 'inline-block' },
        { name: 'Flex', value: 'flex' },
        { name: 'Grid', value: 'grid' },
        { name: 'Inline-Flex', value: 'inline-flex' } 
    ]      
    )
}

export const MobileDisplayOptions = () => {

    return(
    [
        { name: 'Flex', value: 'flex' },
        { name: 'None', value: 'none' },
    ]      
    )
}

export const FlexDirection = () => {

    return(
    [
        { name: 'Row', value: 'row' },
        { name: 'Row Reverse', value: 'row-reverse' },
        { name: 'Column', value: 'column' },
        { name: 'Column Reverse', value: 'column-reverse' } 
    ]      
    )
}

export const JustifyContent = () => {

    return(
    [
        { name: 'Flex Start', value: 'flex-start' },
        { name: 'Flex End', value: 'flex-end' },
        { name: 'Center', value: 'center' },
        { name: 'Space Between', value: 'space-between' },
        { name: 'Space Around', value: 'space-around' },
        { name: 'Space Evenly', value: 'space-evenly' } 
    ]      
    )
}

export const OverflowOptions = () => {

    return(
    [
        { name: 'Visible', value: 'visible' },
        { name: 'Hidden', value: 'hidden' },
        { name: 'Scroll', value: 'scroll' },
        { name: 'Auto', value: 'auto' },
        { name: 'Initial', value: 'initial' },
        { name: 'Inherit', value: 'inherit' } 
    ]      
    )
}

export const PositionOptions = () => {

    return(
    [
        { name: 'Static', value: 'static' },
        { name: 'Relative', value: 'relative' },
        { name: 'Absolute', value: 'absolute' },
        { name: 'Fixed', value: 'fixed' },
        { name: 'Sticky', value: 'sticky' } 
    ]      
    )
}

export const FlexGrowOptions = () => {

    return(
    [
        { name: 'None', value: '0' },
        { name: 'Small', value: '1' },
        { name: 'Medium', value: '2' },
        { name: 'Large', value: '3' },
        { name: 'X-Large', value: '4' },
        { name: 'Auto', value: 'auto' },
        { name: 'Initial', value: 'initial' },
        { name: 'Inherit', value: 'inherit' },
        { name: 'Unset', value: 'unset' } 
    ]      
    )
}

  export const FloatOptions = () => {

    return(
    [
        { name: 'None', value: 'none' },
        { name: 'Left', value: 'left' },
        { name: 'Right', value: 'right' },
        { name: 'Inline Start', value: 'inline-start' },
        { name: 'Inline End', value: 'inline-end' },
        { name: 'Clear', value: 'clear' } 
    ]      
    )
}

  export const ClearOptions = () => {

    return(
    [
        { name: 'None', value: 'none' },
        { name: 'Left', value: 'left' },
        { name: 'Right', value: 'right' },
        { name: 'Both', value: 'both' },
        { name: 'Start', value: 'start' },
        { name: 'End', value: 'end' } 
    ]      
    )
}

  export const VisibilityOptions = () => {

    return(
    [
        { name: 'Visible', value: 'visible' },
        { name: 'Hidden', value: 'hidden' },
        { name: 'Collapse', value: 'collapse' } 
    ]      
    )
}

  export const ZIndexOptions = () => {

    return(
    [
        { name: 'Auto', value: 'auto' },
        { name: '0', value: '0' },
        { name: '1', value: '1' },
        { name: '2', value: '2' },
        { name: '3', value: '3' },
        { name: '4', value: '4' },
        { name: '5', value: '5' },
        { name: '10', value: '10' },
        { name: '50', value: '50' },
        { name: '100', value: '100' },
        { name: '500', value: '500' },
        { name: '1000', value: '1000' },
        { name: '9999', value: '9999' } 
    ]      
    )
}

  export const BoxSizingOptions = () => {

    return(
    [
        { name: 'Content-Box', value: 'content-box' },
        { name: 'Border-Box', value: 'border-box' },
        { name: 'Padding-Box', value: 'padding-box' },
        { name: 'Margin-Box', value: 'margin-box' } 
    ]      
    )
}

  export const GridTemplateColumnsOptions = () => {

    return(
    [
        { name: 'Auto', value: 'auto' },
        { name: '1fr', value: '1fr' },
        { name: '2fr', value: '2fr' },
        { name: '3fr', value: '3fr' },
        { name: '4fr', value: '4fr' },
        { name: '5fr', value: '5fr' },
        { name: '6fr', value: '6fr' },
        { name: '7fr', value: '7fr' },
        { name: '8fr', value: '8fr' },
        { name: '9fr', value: '9fr' },
        { name: '10fr', value: '10fr' },
        { name: '20%', value: '20%' },
        { name: '30%', value: '30%' },
        { name: '40%', value: '40%' },
        { name: '50%', value: '50%' },
        { name: '60%', value: '60%' },
        { name: '70%', value: '70%' },
        { name: '80%', value: '80%' },
        { name: '90%', value: '90%' },
        { name: '100%', value: '100%' } 
    ]      
    )
}

export const TransformOptions = () => {

    return(
    [
        { name: 'None', value: 'none' },
        { name: 'Translate', value: 'translate(10px, 20px)' },
        { name: 'TranslateX', value: 'translateX(10px)' },
        { name: 'TranslateY', value: 'translateY(20px)' },
        { name: 'Scale', value: 'scale(1.5)' },
        { name: 'ScaleX', value: 'scaleX(1.5)' },
        { name: 'ScaleY', value: 'scaleY(1.5)' },
        { name: 'Rotate', value: 'rotate(45deg)' },
        { name: 'SkewX', value: 'skewX(20deg)' },
        { name: 'SkewY', value: 'skewY(20deg)' },
        { name: 'Matrix', value: 'matrix(1, 0, 0, 1, 10, 20)' },
        { name: 'Translate3d', value: 'translate3d(10px, 20px, 30px)' },
        { name: 'Scale3d', value: 'scale3d(1.5, 2, 3)' },
        { name: 'RotateX', value: 'rotateX(45deg)' },
        { name: 'RotateY', value: 'rotateY(45deg)' },
        { name: 'RotateZ', value: 'rotateZ(45deg)' },
        { name: 'Perspective', value: 'perspective(500px)' } 
    ]      
    )
}

export const CursorOptions = () => {

    return(
    [
        { name: 'Default', value: 'default' },
        { name: 'Pointer', value: 'pointer' },
        { name: 'Crosshair', value: 'crosshair' },
        { name: 'Move', value: 'move' },
        { name: 'Text', value: 'text' },
        { name: 'Wait', value: 'wait' },
        { name: 'Help', value: 'help' },
        { name: 'Progress', value: 'progress' },
        { name: 'Not Allowed', value: 'not-allowed' },
        { name: 'Zoom In', value: 'zoom-in' },
        { name: 'Zoom Out', value: 'zoom-out' },
        { name: 'Grab', value: 'grab' },
        { name: 'Grabbing', value: 'grabbing' },
        { name: 'Alias', value: 'alias' },
        { name: 'Cell', value: 'cell' },
        { name: 'Copy', value: 'copy' },
        { name: 'No Drop', value: 'no-drop' },
        { name: 'Vertical Text', value: 'vertical-text' },
        { name: 'Context Menu', value: 'context-menu' },
        { name: 'All Scroll', value: 'all-scroll' },
        { name: 'Col Resize', value: 'col-resize' },
        { name: 'Row Resize', value: 'row-resize' },
        { name: 'N Resize', value: 'n-resize' },
        { name: 'E Resize', value: 'e-resize' },
        { name: 'S Resize', value: 's-resize' },
        { name: 'W Resize', value: 'w-resize' },
        { name: 'NE Resize', value: 'ne-resize' },
        { name: 'NW Resize', value: 'nw-resize' },
        { name: 'SE Resize', value: 'se-resize' },
        { name: 'SW Resize', value: 'sw-resize' },
        { name: 'None', value: 'none' } 
    ]      
    )
}

export const FlexBasisOptions = () => {

    return(
    [
        { name: 'Auto', value: 'auto' },
        { name: 'Fit Content', value: 'fit-content' },
        { name: 'Min Content', value: 'min-content' },
        { name: 'Max Content', value: 'max-content' },
        { name: 'Content', value: 'content' },
        { name: 'Initial', value: 'initial' },
        { name: 'Inherit', value: 'inherit' },
        { name: 'Unset', value: 'unset' },
        { name: '100%', value: '100%' },
        { name: '50%', value: '50%' },
        { name: '30%', value: '30%' },
        { name: '25%', value: '25%' },
        { name: '20%', value: '20%' },
        { name: '15%', value: '15%' },
        { name: '10%', value: '10%' },
        { name: '5%', value: '5%' },
        { name: '3%', value: '3%' },
        { name: '2%', value: '2%' },
        { name: '1%', value: '1%' },
        { name: '0', value: '0' } 
    ]      
    )
}

export const FlexFlowOptions = () => {

    return(
    [
        { name: 'Row', value: 'row' },
        { name: 'Row Reverse', value: 'row-reverse' },
        { name: 'Column', value: 'column' },
        { name: 'Column Reverse', value: 'column-reverse' },
        { name: 'Wrap', value: 'wrap' },
        { name: 'Wrap Reverse', value: 'wrap-reverse' },
        { name: 'No Wrap', value: 'nowrap' }
    ]      
    )
}

export const FlexShrinkOptions = () => {

    return(
    [
        { name: 'Default', value: '1' },
        { name: 'No Shrink', value: '0' },
        { name: 'Shrink Factor 2', value: '2' },
        { name: 'Shrink Factor 3', value: '3' },
        { name: 'Shrink Factor 4', value: '4' },
        { name: 'Shrink Factor 5', value: '5' },
    ]      
    )
}



const FlexWrapOptions = () => {

    return(
    [
        { name: 'No Wrap', value: 'nowrap' },
        { name: 'Wrap', value: 'wrap' },
        { name: 'Wrap Reverse', value: 'wrap-reverse' } 
    ]      
    )
}

export default FlexWrapOptions