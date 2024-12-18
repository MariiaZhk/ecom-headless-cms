import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--background-yellow);
  padding: 6px;
`;

export const StyledTexts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;

  span {
    font-family: var(--second-family);
    font-size: 14px;
    line-height: 3.18;
    letter-spacing: 0.08em;
    text-align: center;
    color: var(--header-text);
    margin: 0;
    position: relative;
  }

  span:not(:last-child)::after {
    content: "|";
    margin: 0 8px;
    color: rgba(86, 86, 86, 0.5);
  }

  @media (max-width: 428px) {
    span {
      display: none;
    }

    span:first-child {
      display: inline-block;
    }
  }

  @media (min-width: 429px) {
    span {
      display: inline-block;
    }
  }
`;
