import styled from "styled-components";

export const UserButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
`;

export const Menu = styled.div`
  position: absolute;
  top: 45px;
  right: 0;
  width: 120px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  z-index: 1000;
`;

export const MenuItem = styled.div`
  padding: 12px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: #f5f5f5;
    color: red;
  }
`;