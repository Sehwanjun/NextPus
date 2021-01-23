import styled from 'styled-components';
import Modal, { BaseModalBackground } from 'styled-react-modal';

export const Container = styled.div`
  position: relative;
`;

export const NavMain = styled.ul`
  display: flex;
  align-items: center;
  li:hover {
    color: #ffffff;
    fill: #ffffff;
  }

  li:nth-of-type(7) {
    border-right: 1px solid #5c6f7c;
  }

  // 클릭하여 선택된 객체(active)의 style
  li:nth-of-type(${({ active }) => active}) {
    // 마지막에 보충해서 넣는 내용(content속성: 내용)
    a::after {
      display: block;
      content: '';
      position: absolute;
      width: 100%;
      left: 0;
      bottom: -6px;
      border-bottom: 2.3px solid #fff;
    }
    a {
      color: #ffffff;
    }
    svg {
      fill: #ffffff;
    }
  }

  li:nth-of-type(${({ notification }) => notification[0]}) {
    a {
      span:nth-child(2) {
        display: none;
      }
    }
  }

  li:nth-of-type(${({ notification }) => notification[1]}) {
    a {
      span:nth-child(2) {
        display: none;
      }
    }
  }
`;

export const ModalUser = Modal.styled`
  width: 288px;
  padding-top: 20px;
  background: white;
  position: fixed;
  top: 58px;
  right: 120px;

  border-radius: 2px;
  border: none;
  box-shadow: 0 0 0 1px rgba(0,0,0,.02), 0 3px 9px rgba(0,0,0,.2);
`;

export const ModalBackground = styled(BaseModalBackground)`
  opacity: 1;
  background: none;
`;
