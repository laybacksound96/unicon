import styled from "styled-components";

const Frame = styled.div`
  background-color: #cae6ff;
  grid-column: span 2;
`;

const Title = styled.div`
  margin: 10px 10px;
  padding: 10px;
  height: 50px;
  background-color: #c2ffff;
`;
const Day = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  margin: 10px 10px;
  padding: 10px;
  width: auto;
  height: 70%;
`;

const Days = styled.div`
  margin: 5px;
  width: auto;

  border-radius: 10px;
  background-color: azure;
`;
function CalenderContainer() {
  return (
    <Frame>
      <Title>Calender</Title>
      <Day>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(() => (
          <Days />
        ))}
      </Day>
    </Frame>
  );
}

export default CalenderContainer;
