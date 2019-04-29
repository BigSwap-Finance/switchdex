import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { themeColors, themeDimensions } from '../../themes/theme_commons';

import { CardBase } from './card_base';

interface Props extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    action?: React.ReactNode;
    children: React.ReactNode;
}

const CardWrapper = styled(CardBase)`
    margin-bottom: 10px;
`;

const CardHeader = styled.div`
    align-items: center;
    border-bottom: 1px solid ${themeColors.borderColor};
    display: flex;
    justify-content: space-between;
    padding: 15px ${themeDimensions.horizontalPadding};
`;

const CardTitle = styled.h1`
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.2;
    margin: 0;
    padding: 0 20px 0 0;
`;

const CardBody = styled.div`
    margin: 0;
    min-height: 140px;
    overflow-x: auto;
    padding: ${themeDimensions.verticalPadding} ${themeDimensions.horizontalPadding};
    position: relative;
`;

export const Card: React.FC<Props> = props => {
    const { title, action, children, ...restProps } = props;

    return (
        <CardWrapper {...restProps}>
            {title || action ? (
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    {action ? action : null}
                </CardHeader>
            ) : null}
            <CardBody>{children}</CardBody>
        </CardWrapper>
    );
};
