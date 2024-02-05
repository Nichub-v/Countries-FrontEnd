import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.colors.darkerBgCol};

    overflow-y: auto;

    .layout {
        display: flex;
        flex-direction: row;
        background-color: ${({theme}) => theme.colors.darkerBgCol};
    }

    .main {
        width: 100vw;
    }

    .side-content {
        
    }
    
`