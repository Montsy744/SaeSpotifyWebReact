import React from 'react';
import styled from 'styled-components';

const ButtonRotate = () => {
    return (
        <StyledWrapper>
            <button>
                <span className="span-mother">
                    <span>C</span>
                    <span>O</span>
                    <span>M</span>
                    <span>M</span>
                    <span>E</span>
                    <span>N</span>
                    <span>C</span>
                    <span>E</span>
                    <span>R</span>
                </span>
                <span className="span-mother2">
                    <span>C</span>
                    <span>O</span>
                    <span>M</span>
                    <span>M</span>
                    <span>E</span>
                    <span>N</span>
                    <span>C</span>
                    <span>E</span>
                    <span>R</span>
                </span>
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    button {
        position: relative;
        font-weight: bold;
        color: white;
        border-radius: 2rem;
        cursor: pointer;
        border: none;
        background-color: #23C368;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 100px;
        font-size: 1.5em;


        min-width: 180px;
        min-height: 48px; 
    }

    button .span-mother,
    button .span-mother2 {
        display: flex;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        pointer-events: none;

    }

    button .span-mother {
        z-index: 1;
        overflow: hidden;
    }

    button .span-mother2 {
        z-index: 2;
        overflow: hidden;
    }

    button .span-mother span {
        transition: transform 0.4s;
    }

    button .span-mother2 span {
        transition: transform 0.4s;
        transform: translateY(-1.4em);
    }

    button:hover .span-mother span {
        transform: translateY(1.4em);
    }

    button:hover .span-mother2 span {
        transform: translateY(0);
    }

    /* Transitions décalées pour chaque lettre */
    button .span-mother span:nth-child(1),
    button .span-mother2 span:nth-child(1) { transition-delay: 0.1s; }
    button .span-mother span:nth-child(2),
    button .span-mother2 span:nth-child(2) { transition-delay: 0.2s; }
    button .span-mother span:nth-child(3),
    button .span-mother2 span:nth-child(3) { transition-delay: 0.3s; }
    button .span-mother span:nth-child(4),
    button .span-mother2 span:nth-child(4) { transition-delay: 0.4s; }
    button .span-mother span:nth-child(5),
    button .span-mother2 span:nth-child(5) { transition-delay: 0.5s; }
    button .span-mother span:nth-child(6),
    button .span-mother2 span:nth-child(6) { transition-delay: 0.6s; }
    button .span-mother span:nth-child(7),
    button .span-mother2 span:nth-child(7) { transition-delay: 0.7s; }
    button .span-mother span:nth-child(8),
    button .span-mother2 span:nth-child(8) { transition-delay: 0.8s; }
    button .span-mother span:nth-child(9),
    button .span-mother2 span:nth-child(9) { transition-delay: 0.9s; }
`;

export default ButtonRotate;
