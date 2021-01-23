import styled from 'styled-components';


export const Container = styled.div`
    min-height: calc(100vh - 52px);
`;

export const Wrapper = styled.div`
    width: 1128px;
    box-sizing: content-box;
    padding: 0 30px;
    display: block;
    margin: auto;
    position: relative;
`;

export const Box = styled.div`
    min-height: calc(100vh - 52px);
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    width: 540px;
    padding-bottom: 16px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`;

export const H1 = styled.h1`
    font-size: 3.2rem;
    line-height: 1.2;
    font-weight: 200;
    color: rgba(0,0,0,0.9);
    margin: 0 auto 40px;
    padding-top: 32px;
`;

export const H2 = styled.h2`
    font-size: 1.7rem;
    line-height: 1.41176;
    font-weight: 400;
    color: rgba(0,0,0,0.6);
`;



export const Section = styled.section`
    width: 408px;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    display:block;
`;

export const ContentDiv = styled.div`
    width: 100%;
`;
