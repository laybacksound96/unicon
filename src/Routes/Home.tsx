import styled from "styled-components";
import BoxA from "../Components/BoxA";
import BoxB from "../Components/BoxB";
import CalenderContainer from "../Components/CalenderContainer";
import PhotoContainer from "../Components/PhotoContainer";

const MainFrame = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100vh;
  width: 100%;
  gap: 10px;
`;

function Home() {
  return (
    <MainFrame>
      <PhotoContainer></PhotoContainer>
      <BoxA></BoxA>
      <BoxB></BoxB>
      <CalenderContainer></CalenderContainer>
    </MainFrame>
  );
}

export default Home;
