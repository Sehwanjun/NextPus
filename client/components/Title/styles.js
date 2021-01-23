import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background: #e6e6ff;
    }
`;

export const Text = styled.span`
  font-size: ${({ small }) => (small ? '1.2rem' : '1.5rem')};
  color: ${({ gray }) => (gray ? 'rgba(0, 0, 0, .9)' : '#0073b1')};
`;

export const Icon = styled.div`
      opacity: 1;
      transform: ${({ roll }) => (roll ? 'rotate(180deg)' : undefined)};
      transition: all 0.4s ease;
      cursor: pointer;
`;
