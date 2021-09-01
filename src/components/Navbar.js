import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/logo.png';
import { animateScroll } from "react-scroll";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { menuData } from "../data/MenuData";

const Navbar = ({ toggleSidebar }) => {
    const [isScrollDown, setIsScrollDown] = useState(false);

        useEffect(() => {
            const threshold = 0;
            let lastScrollY = window.pageYOffset;
            let ticking = false;
            
            const updateScrollDir = () => {
                const scrollY = window.pageYOffset;
            
                if (Math.abs(scrollY - lastScrollY) < threshold) {
                    ticking = false;
                    return;
                }
                setIsScrollDown(scrollY > lastScrollY ? true : false);

                lastScrollY = scrollY > 0 ? scrollY : 0;
                ticking = false;
            };
            
            const onScroll = () => {
                if (!ticking) {
                    window.requestAnimationFrame(updateScrollDir);
                    ticking = true;
                }
            };
            
            window.addEventListener('scroll', onScroll);
        
            return () => window.removeEventListener('scroll', onScroll);
        }, [isScrollDown]);

    const toggleHome = () => {
        animateScroll.scrollToTop();
    };

    return (
        <NavContainer isScrollDown={isScrollDown}>
            <NavLogo to="/" onClick={toggleHome}>
                <img src={Logo} alt="Digital Spaniel Logo" />
            </NavLogo>
            <Bars onClick={toggleSidebar} />
            <NavLinks className={useLocation().pathname === "/" ? "white-text" : "black-text"}>
                {menuData.map((item, index) => (
                    <NavLink
                        to={item.link}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        key={index}
                        activeClassName="is-active"
                    >
                        {item.title}
                    </NavLink>
                ))}
            </NavLinks>
        </NavContainer>
    );
};

export default Navbar;

const NavContainer = styled.div`
    height: 120px;
    position: sticky;
    top: 0;
    width: 100%;
    display: ${({ isScrollDown }) => (isScrollDown ? "none" : "grid")};
    grid-template-columns: 50%;
    grid-template-areas: 'item item';
    align-items: flex-end;

    @media screen and (max-width: 1024px) {
        padding: 30px 30px 0;
        height: 90px;
    }
`;

const NavLogo = styled(Link)`
    @media screen and (min-width: 1025px) {
        margin-left: calc((50vw - 425px) / 2);
    }

    img {
        height: 90px;

        @media screen and (max-width: 1024px) {
            height: 60px;
        }
    }
`;

const Bars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 1024px) {
        display: block;
        justify-self: flex-end;
        align-self: flex-start;
        font-size: 1.8rem;
    }
`;

const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    justify-self: center;
    align-items: flex-end;
    grid-gap: 30px;

    @media screen and (max-width: 1024px) {
        display: none;
    }

    a {
        cursor: pointer;
        font-weight: 600;
        font-size: 20px;

        &.is-active {
            border-bottom: 3px solid;
            margin-bottom: -8px;
            padding-bottom: 5px;
        }
    }
`;
