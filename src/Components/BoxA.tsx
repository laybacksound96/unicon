import styled from "styled-components";

const Frame = styled.div`
  background-color: #e7ffca;
  grid-row: span 2;
  display: grid;
  gap: 20px;
  grid-template-rows: repeat(4, 1fr);
  div:last-child {
    grid-row: span 2;
  }
`;
const Todos = styled.div`
  background-color: #e87fff;
  width: auto;
  height: auto;
  margin: 10px 10px;
`;
function BoxA() {
  return (
    <Frame>
      <Todos></Todos>
      <Todos></Todos>
      <Todos></Todos>
    </Frame>
  );
}
export default BoxA;
