import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 130px;

    background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
    border-radius: 14px;
    border: ${props => props.isBack ? '1px solid #ffffff' : 'none'};

    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;

    color:#FFFFFF;

    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 20px;

    &:hover{
        opacity: 0.8
    }

    &:active{
        opacity: 0.4;
    }

    img{
        transform: ${props => props.isBack && 'rotateX(180deg)'};
    }

`;