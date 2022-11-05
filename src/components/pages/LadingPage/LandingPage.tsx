import React from 'react';
import { ButtonLink } from "../../ButtonLink/ButtonLink";
import { ButtonTypes } from "../../ButtonLink/ButtonLink.styled";
import { ButtonGroup } from "../../ButtonGroup/ButtonGroup.styled";
import { Navbar } from "../../Navbar/Navbar";

export const LandingPage = () => {
    return (
        <>
            <Navbar/>

            <section className="announcement">
                <div>
                    <div className="banner">NEW</div>
                    <div className="information">
            <span className="text">
                Check your eligibility for early access to Staking v0.1.
            </span>
                        <a href="https://staking.chain.link/?utm_medium=referral&amp;utm_source=chainlink"
                           target="_blank"
                           rel="noreferrer"
                           className="announcement-modal-link">View now.</a>
                    </div>
                </div>
            </section>

            <section className="hero">
                <div className="hero-image-container">
                    <img src="/images/hexagon-light.svg" alt="Hexagon"/>
                    <div className="hero-color-fill"/>
                </div>

                <div className="hero-container">
                    <h1 className="h1-hero-title">Build hybrid smart contracts with Chainlink</h1>

                    <p className="hero-subtext">Chainlink gives blockchain developers an easy-to-use framework for
                        writing hybrid smart
                        contracts that connect to external resources by combining on-chain and off-chain
                        computation.</p>

                    <ButtonGroup>
                        <ButtonLink type={ButtonTypes.PRIMARY} url="#">Start building</ButtonLink>
                        <ButtonLink type={ButtonTypes.SECONDARY} url="#">Get support</ButtonLink>
                    </ButtonGroup>
                </div>
            </section>
        </>
    );
};
