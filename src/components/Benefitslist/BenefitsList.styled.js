import styled from "styled-components";

export const Container = styled.div`
  margin: 0 26px 0 21px;
`;

export const BenefitsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-bottom: 29px;
`;

export const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: 14px;
  line-height: 1.5;
  font-size: 13px;
  line-height: 1.38;
  letter-spacing: 0.03em;
`;

export const IconWrapper = styled.div`
  width: 31px;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-yellow);
  border-radius: 50%;
  flex-shrink: 0;
  svg {
    fill: #01005b;
    stroke-width: 0.3px;
    stroke: #01005b;
  }
`;
