import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/logo.png';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { menuData } from "../data/MenuData";

const Sidebar = ({ isOpen, toggleSidebar }) => {

    const toggleHome = () => {
        animateScroll.scrollToTop();
    };

    return (
        <SidebarContainer isOpen={isOpen}>
            <SidebarNavHeader>
                <NavLogo onClick={() => {
                    toggleSidebar();
                    toggleHome();
                }}>
                    <img src={Logo} alt="Digital Spaniel Logo" />
                </NavLogo>
                <CloseIcon onClick={toggleSidebar} />
            </SidebarNavHeader>
            <SidebarMenuContainer onClick={() => {
                toggleSidebar();
                toggleHome();
            }}>
            <SidebarMenu>
                {menuData.map((item, index) => (
                <SidebarLink
                    to={item.link}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    key={index}
                    onClick={toggleSidebar}
                    >
                    {item.title}
                    </SidebarLink>
                ))}
                </SidebarMenu>
            </SidebarMenuContainer>
        </SidebarContainer>
    );
};

export default Sidebar;

const SidebarMenuContainer = styled.div`
    height: ${window.innerHeight + "px"};
    padding-top: 60px;
`;

const SidebarNavHeader = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 30px 0;
`;

const NavLogo = styled(Link)`
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    cursor: pointer;

    img {
        height: 60px;
    }
`;

const SidebarContainer = styled.aside`
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: fixed;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background-color: white;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
    justify-self: flex-end;
    align-self: flex-start;
    font-size: 1.8rem;
`;

const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 80px);
    text-align: center;
`;

const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #ef4b6c;
        transition: 0.2s ease-in-out;
    }
`;
