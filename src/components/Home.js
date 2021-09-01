import React from 'react';
import styled from 'styled-components';
import MainImage from '../assets/images/Spaniel01_gradient.jpg';

const Home = () => {
    return (
        <HeroContainer>
            <HeroTextContainer>
                <HeroTitle>
                    We unleash
                    <span>business potential</span>
                </HeroTitle>
            </HeroTextContainer>
            <HeroImg src={MainImage} alt="Spaniel" />
        </HeroContainer>
    );
};

export default Home;

const HeroContainer = styled.div`
    height: ${window.innerHeight + 'px'};
    margin-top: -120px;
    display: grid;
    
    @media screen and (max-width: 1024px) {
        margin-top: -90px;
    }

    @media screen and (min-width: 1025px) {
        grid-template-columns: 50%;
        grid-template-areas: 'item item';
    }
`;

const HeroTextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1024px) {
        height: 50vh;
        padding-top: 90px;
    }
`;

const HeroTitle = styled.p`
    font-size: 48px;
    color: #19293A;

    span {
        display: block;
        color: #506473;
    }

    @media screen and (max-width: 1024px) {
        font-size: 30px;
    }
`;

const HeroImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 1024px) {
        height: 50vh;
    }
`;
