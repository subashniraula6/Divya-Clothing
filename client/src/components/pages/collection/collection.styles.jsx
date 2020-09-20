import styled from 'styled-components'

export const CollectionPageContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;

    @media screen and (max-width: 800px){
        align-items: center
    }
`;

export const CollectionTitle = styled.div`
    padding-left: 20px
`

export const CollectionItemsContainer = styled.div`
width : 100%;
display: grid;
grid-template-columns: repeat(4, 24%);
margin-bottom: 20px;
grid-gap: 8px;
justify-content: center;

    @media screen and (max-width: 800px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
        justify-content: center;
        grid-auto-columns: minmax(10px, auto);
    }
`