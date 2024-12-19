import sprite from "../../assets/sprite.svg";
import {
  BenefitItem,
  BenefitsList,
  Container,
  IconWrapper,
} from "./BenefitsList.styled";

function Benefits() {
  return (
    <Container>
      <BenefitsList>
        <BenefitItem>
          <IconWrapper>
            <svg width="20" height="20">
              <use href={`${sprite}#icon-sunmoon`} />
            </svg>
          </IconWrapper>
          Beautiful, comfortable loungewear for day or night.
        </BenefitItem>
        <BenefitItem>
          <IconWrapper>
            <svg width="19" height="15">
              <use href={`${sprite}#icon-basket`} />
            </svg>
          </IconWrapper>
          No wasteful extras, like tags or plastic packaging.
        </BenefitItem>
        <BenefitItem>
          <IconWrapper>
            <svg width="14" height="13">
              <use href={`${sprite}#icon-waves`} />
            </svg>
          </IconWrapper>
          Our signature fabric is incredibly comfortable — unlike anything
          you’ve ever felt.
        </BenefitItem>
      </BenefitsList>
    </Container>
  );
}

export default Benefits;
