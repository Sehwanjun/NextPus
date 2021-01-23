import styled from 'styled-components';

export const Container = styled.li`
  position: relative;
  &:hover {
    a {
      color: #ffffff;
    }
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 72px;
    height: 44px;
    position: relative;
    text-decoration: none;
    font-weight: 500;
    color: #1a2327;
    border-radius: 4px;
    &:hover {
      background-color: #2c4d83;
      svg {
        fill: #ffffff;
      }
    }
  }
`;

export const Icon = styled.span`
  svg {
    width: 26px;
    height: 26px;
    fill: #1a2327;
  }

  img {
    width: 26px;
    height: 26px;
    border: 1px solid #fff;
    border-radius: 50%;
  }
`;

export const Text = styled.span`
  font-size: 1.21rem;
  line-height: 1.23;
  display: block;
  font-weight: 600;
  /* transition: color 0.05s; */

  display: flex;
  align-items: center;

  span {
    font-weight: 600;
    /* margin-right: 2px; */
  }
`;

export const Notification = styled.span`
  position: absolute;
  top: -4px;
  left: 50%;
  height: 16px;
  width: 16px;
  color: #fff;
  line-height: 14px;
  background-color: #d11124;
  border: 1.6px solid #283e4a;
  border-radius: 50px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
