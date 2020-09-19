import React from 'react'
import {CustomButtonContainer} from './custom-button.styles'

export const CustomButton = ({children, ...otherProps}) => {
    return (
        <CustomButtonContainer {...otherProps}>
            {children}
        </CustomButtonContainer>
    )
}

