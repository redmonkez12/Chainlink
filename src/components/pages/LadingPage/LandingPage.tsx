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

                <div className="container hero-container">
                    <div className="h1-hero-title">
                        <h1>Securely connect smart contracts with off-chain data and services</h1>
                    </div>

                    <p className="hero-subtext">Chainlink decentralized oracle networks provide tamper-proof inputs,
                        outputs, and computations to support advanced smart contracts on any blockchain..</p>

                    <ButtonGroup>
                        <ButtonLink type={ButtonTypes.PRIMARY} url="#">Start building</ButtonLink>
                        <ButtonLink type={ButtonTypes.SECONDARY} url="#">Get support</ButtonLink>
                    </ButtonGroup>
                </div>
            </section>
        </>
    );
};
