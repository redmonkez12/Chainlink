import React from 'react';
import { Link } from "react-router-dom";

import { HeaderStyled, NavbarStyled } from "./Navbar.styled";

export const Navbar = () => {
    return (
        <NavbarStyled>
            <HeaderStyled>
                <Link to="#">
                    <img src="/images/icon.svg" alt="Logo"/>
                </Link>

                <div className="menu-lang">
                    <div className="lang-wrapper">
                        <div>
                            <img src="/images/en.svg" alt="Language"/>
                            <div className="language-text">EN</div>
                        </div>
                    </div>

                    <div className="menu">
                        <div>Menu</div>
                    </div>
                </div>
            </HeaderStyled>
        </NavbarStyled>
    );
};
