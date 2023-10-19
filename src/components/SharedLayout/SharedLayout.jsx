import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { HeaderContainer, SharedContainer } from "./SharedLayout.styled";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";

const SharedLayout = () => {
    return (
        
     

        <SharedContainer>
            <AnimatedBackground/>
            <HeaderContainer>
                <h3>PaZLo</h3>
                <NavBar />
            </HeaderContainer>

            
                <Outlet />
            
                
        </SharedContainer>
     
    );
};
export default SharedLayout;
