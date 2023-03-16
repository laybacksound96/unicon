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
  padding: 10px;
  margin: 10px 10px;
`;
function BoxA() {
  return (
    <Frame>
      <Todos>Weather</Todos>
      <Todos>TodoA</Todos>
      <Todos>TodoB</Todos>
    </Frame>
  );
}
export default BoxA;
