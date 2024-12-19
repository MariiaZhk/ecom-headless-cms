import styled from "styled-components";

export const LogoTitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 13px;
  margin-bottom: 17px;

  h2 {
    font-size: 26px;
    line-height: 1.31;
    font-weight: 400;
    letter-spacing: 0.04em;
    color: var(--titles-text-color);
    text-align: center;
  }

  @media (min-width: 429px) {
    justify-content: flex-start;
    align-items: flex-start;

    h1 {
      text-align: left;
    }
  }
`;
