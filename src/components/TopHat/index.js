import styled from 'styled-components';
import Link from 'next/link';

const TopHat = () => {
  return (
    <Container>
      <Link href="/">
        <Logo>ballot.fyi</Logo>
      </Link>
      <RightSide>
        <Line />
        <Description>California Props 2020</Description>
      </RightSide>
    </Container>
  );
};

export default TopHat;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: no-wrap;
  box-sizing: border-box;
  width: 100%;
`;

const Logo = styled.div`
  font-family: 'ITC Avant Garde', Inter, sans-serif;
  font-size: 14px;
  background-color: rgba(0, 20, 20, 0.7);
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 16px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 36px;
  border-radius: 1px;
  @media screen and (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
    height: 35px;
  }
  @media screen and (max-width: 576px) {
    padding-left: 10px;
    padding-right: 10px;
    height: 30px;
  }
`;

const RightSide = styled.div`
  margin: 17px 16px 0 16px;
  width: 100%;
`;

const Line = styled.div`
  height: 1px;
  background-color: magenta;
  @media screen and (max-width: 768px) {
    margin-left: 12px;
    margin-right: 12px;
  }
  @media screen and (max-width: 576px) {
    margin-left: 8px;
    margin-right: 8px;
  }
`;

const Description = styled.div`
  padding-top: 4px;
  font-family: Inter, Helvetica;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0.095em;
  text-transform: uppercase;
`;
