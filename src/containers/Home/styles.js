import styled from "styled-components";

import backgroud from "../../Novassets/backgroud1.svg";

export const Containers = styled.div`
    background: url("${backgroud}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    height: 100%;
    min-height: 100vh;

`;
export const Image = styled.img`
    margin-top: 30px;
`;
export const ContainerItens = styled.div`
    background: linear-gradient(
        157.44deg,
        rgba(255, 255, 255, 0.6) 0.84%,
        rgba(255, 255, 255, 0.6) 0.85%,
        rgba(255, 255, 255, 0.15) 100%
    );
    border-radius: 61px, 61px, 0px, 0px;

    padding: 50px 36px;
    display: flex;
    flex-direction: column;

    height: 100%;
    min-height: calc(100vh- 170px);
`;

export const InputLabel = styled.p`
    letter-spacing: -0.408px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    color:#EEEEEE;

    margin-left: 25px;

`;
export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    
    width: 342px;
    height: 58px;
    padding-left: 25px; 
    margin-bottom: 34px;  

    border: none;
    outline: none;

    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;

    color: #ffffff;

`;



