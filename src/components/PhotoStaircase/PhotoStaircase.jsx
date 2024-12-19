import leftImage from "../../assets/heroImage2.png";
import centralImage from "../../assets/heroImage1.png";
import rightImage from "../../assets/heroImage3.png";
import yellowBackground from "../../assets/heroDefault.png";
import {
  BackgroundImage,
  CentralImage,
  Container,
  SideImage,
} from "./PhotoStaircase.styled";

function PhotoStaircase() {
  return (
    <Container>
      <BackgroundImage
        className="left-bg"
        src={yellowBackground}
        alt="Left Background"
      />
      <SideImage className="left" src={leftImage} alt="Left Side Image" />
      <CentralImage src={centralImage} alt="Central Image" />
      <BackgroundImage
        className="right-bg"
        src={yellowBackground}
        alt="Right Background"
      />
      <SideImage className="right" src={rightImage} alt="Right Side Image" />
    </Container>
  );
}

export default PhotoStaircase;
