import styled from "styled-components";

const Frame = styled.div`
  background-color: #e7ffca;
  grid-row: span 2;
  display: flex;
  flex-direction: column;
`;
const Todos = styled.div`
  background-color: #7f83ff;
  width: auto;
  height: 300px;
  margin: 10px 10px;
`;
function BoxB() {
  return (
    <Frame>
      <Todos></Todos>
      <Todos></Todos>
    </Frame>
  );
}
export default BoxB;
