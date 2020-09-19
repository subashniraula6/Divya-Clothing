import styled, { css } from 'styled-components'

const largeItem = css`
    height: 350px;
    min-width: 40%;
`
const backgroundImageStyles = css`
height: 100%;
width: 100%;
background-position: center;
background-size: cover;
`

export const MenuItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;
    flex-wrap: wrap;
    &:hover{

      cursor: pointer;
        .background-image{
          transform: scale(1.1);
          transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
        .content{
          opacity: 0.9;
        }
    }
`;

export const Content = styled.div`
    height: 80px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: 1px solid black;
    opacity: 70%;
    position: absolute;
`

export const Title = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`

export const Subtitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`;
