import styled from "styled-components";

const Frame = styled.div`
  display: flex;
  background-color: #cae6ff;
  grid-column: span 2;
`;
const Photo = styled.div`
  background-color: aquamarine;
  width: 100%;
  margin: 10px 10px;
`;

function PhotoContainer() {
  return (
    <Frame>
      <Photo></Photo>
      <Photo></Photo>
      <Photo></Photo>
    </Frame>
  );
}
export default PhotoContainer;
