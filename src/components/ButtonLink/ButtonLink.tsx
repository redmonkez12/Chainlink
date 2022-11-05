import React, { FunctionComponent, PropsWithChildren } from 'react';

import { ButtonLinkStyled, ButtonTypes } from "./ButtonLink.styled";

type Props = {
    url: string;
    type: ButtonTypes;
}

export const ButtonLink: FunctionComponent<PropsWithChildren<Props>> = ({ url, type, children }) => {
    return (
        <ButtonLinkStyled to={url} type={type}>
            {children}
        </ButtonLinkStyled>
    );
};
