import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { HeaderContainer, SharedContainer } from "./SharedLayout.styled";

const SharedLayout = () => {
    return (
        <SharedContainer>
            <HeaderContainer>
                <h3>PaZLo</h3>

                <NavBar />
            </HeaderContainer>

            <div className="infoContainer">
                <Outlet />
            </div>
        </SharedContainer>
    );
};
export default SharedLayout;
