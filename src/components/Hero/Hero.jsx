import { LogoTitleWrap } from "./Hero.styled";
import BenefitsList from "../Benefitslist/BenefitsList";
import sprite from "../../assets/sprite.svg";
import PhotoStaircase from "../PhotoStaircase/PhotoStaircase";

function Hero() {
  return (
    <>
      <LogoTitleWrap>
        <svg width="200" height="35">
          <use href={`${sprite}#icon-logotype`} />
        </svg>
        <h2>Don’t apologize for being comfortable.</h2>
      </LogoTitleWrap>
      <PhotoStaircase />
      <BenefitsList />
    </>
  );
}

export default Hero;
