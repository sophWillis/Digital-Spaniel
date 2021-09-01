import React from 'react'
import styled from 'styled-components';

const Page404 = () => {
    return (
        <Page404Container>
            Page not found.
        </Page404Container>
    )
}

export default Page404;

const Page404Container = styled.div`
    height: ${window.innerHeight + "px"};
    margin-top: -120px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: #506473;
    
    @media screen and (max-width: 1024px) {
        margin-top: -90px;
    }
`;
