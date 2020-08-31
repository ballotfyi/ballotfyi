import styled from 'styled-components';

const TopNav = () => {
  return (
    <Container>
      <Line />
      <Center>ballot.fyi</Center>
      <Line />
    </Container>
  );
};

export default TopNav;

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
`;

const Line = styled.div`
  height: 1px;
  background-color: #999;
  margin-left: 16px;
  margin-right: 16px;
  width: 100%;
`;
