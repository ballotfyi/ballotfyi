import styled from 'styled-components';

const TopHat = () => {
  return (
    <Container>
      <Line />
      <Center>ballot.fyi</Center>
      <Line />
    </Container>
  );
};

export default TopHat;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: no-wrap;
  box-sizing: border-box;
`;

const Center = styled.div`
  font-family: Inter, 'ITC Avant Garde', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.195em;
  font-size: 12px;
  min-width: 140px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 576px) {
    font-size: 10px;
    min-width: 100px;
  }
`;

const Line = styled.div`
  height: 1px;
  background-color: #999;
  margin-left: 16px;
  margin-right: 16px;
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-left: 12px;
    margin-right: 12px;
  }
  @media screen and (max-width: 576px) {
    margin-left: 8px;
    margin-right: 8px;
  }
`;
