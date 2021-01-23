import styled from 'styled-components';

export const Container = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    height: 52px;
    z-index: 3;
    background-color: var(--white,#fff);
    padding-top: 8px;
    width: 100%;
`;

export const Wrapper = styled.div`
    width: 1128px;
    box-sizing: content-box;
    padding: 0 30px;
    display: block;
    margin: auto;
    position: relative;
`;

export const LogoDiv = styled.li`
    display: inline-block;
    padding-top: 12px;
    overflow: hidden;
    position: relative;
    width: 14rem;
    height: 3.0rem;
`;

export const H1 = styled.h1`
    line-height: 1.25;
    color: #000;
    text-align: center;
    padding: 24px 16px;
    font-size: 3.2rem;
    font-weight: 400;
`;