import styled from "styled-components";

const Frame = styled.div`
  display: flex;
  background-color: #cae6ff;
  grid-column: span 2;
`;
const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: aquamarine;
  width: 100%;
  margin: 10px 10px;
`;

function PhotoContainer() {
  return (
    <Frame>
      <Photo>PhotoA</Photo>
      <Photo>PhotoB</Photo>
      <Photo>PhotoC</Photo>
    </Frame>
  );
}
export default PhotoContainer;
