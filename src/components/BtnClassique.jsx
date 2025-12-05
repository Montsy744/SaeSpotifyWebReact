import React from 'react';
import styled from 'styled-components';

const BtnClassique = (props) => {
    return (
        <StyledWrapper>
            <button className="button">
                {props.titre}
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    .button {
        display: inline-block;
        padding: 12px 28px;
        margin: 10px;
        font-size: 24px;
        font-weight: bold;
        text-transform: uppercase;
        color: #fff;
        background-image: linear-gradient(to bottom right, #0ff171ff, #23C368);
        border: none;
        border-radius: 40px;
        box-shadow: 0px 4px 0px #23C368;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    .button:hover {
        transform: translateY(-2px);
        box-shadow: 0px 6px 0px #23C368;
    }

    .button:active {
        transform: translateY(0px);
        box-shadow: none;
        background-image: linear-gradient(to bottom right, #0ff171ff, #23C368);
    }

    .button:before,
    .button:after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
    }

    .button:before {
        top: -3px;
        left: -3px;
        border-radius: 40px;
        border-top: 3px solid #fff;
        border-left: 3px solid #fff;
    }

    .button:after {
        bottom: -3px;
        right: -3px;
        border-radius: 40px;
        border-bottom: 3px solid #fff;
        border-right: 3px solid #fff;
    }`;

export default BtnClassique;
