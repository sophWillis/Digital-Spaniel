import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterBottom>
                <FooterCopy>© Digital Spaniel {new Date().getFullYear()}. All rights reserved.</FooterCopy>
                <FooterLinks>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                    <FaLinkedinIn />
                </FooterLinks>
            </FooterBottom>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.div`
    height: 623px;
    background-color: #EDEFF1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 30px 100px;
`;

const FooterCopy = styled.p`
    color: #50647380;
    font-size: 21px;
`;

const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

const FooterLinks = styled.div`
    font-size: 25px;
    display: flex;
    grid-gap: 30px;

    
    svg {
        fill: #9EA9B1;
    }
`;
