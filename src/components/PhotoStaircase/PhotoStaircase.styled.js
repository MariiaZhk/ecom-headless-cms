import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  position: relative;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 29px;
`;

export const CentralImage = styled.img`
  position: relative;
  z-index: 3;
  width: 137px;
  height: 221px;
`;

export const SideImage = styled.img`
  position: absolute;
  width: 110px;
  height: 165px;
  z-index: 2;

  &.left {
    left: 40px;
  }

  &.right {
    right: 40px;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  width: 70px;
  z-index: 1;

  &.left-bg {
    left: 5px;
  }

  &.right-bg {
    right: 5px;
  }
`;
