import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const OptionsContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    border-radius: 3px; 

    @media screen and (max-width: 800px) {
        height: 60px;
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    cursor: pointer;
    position: relative;
    bottom: 7px;

    @media screen and (max-width: 800px) {
        padding: 0px;
        width: 50px;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center; 
    justify-content: flex-end; 

    @media screen and (max-width: 800px) {
        padding: 0px;
        width: 80%;
    }
`;

export const OptionLink = styled(Link)`
    ${OptionsContainerStyles}
`;

export const OptionDiv = styled.div`
    ${OptionsContainerStyles}
`;