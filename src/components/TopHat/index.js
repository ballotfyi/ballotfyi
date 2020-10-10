import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { propColors } from 'components/attributes';

const TopHat = () => {
  const router = useRouter();
  const pathSplit = router.asPath.split('-');
  let color = '#000';
  if (pathSplit[0] === '/prop' && pathSplit.length > 1) {
    color = propColors[parseInt(pathSplit[1])];
  }
  return (
    <>
      <Link href="/">
        <Logo color={color}>ballot.fyi</Logo>
      </Link>
      <Container>
        <LogoBlock>ballot.fyi</LogoBlock>
        <RightSide>
          <Line />
          <Description>California Props 2020</Description>
        </RightSide>
      </Container>
    </>
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

const LogoBlock = styled.div`
  font-family: 'ITC Avant Garde', Inter, sans-serif;
  font-size: 14px;
  min-width: 62.5px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 16px;
  margin-top: 16px;
  height: 36px;
  color: white;
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

const Logo = styled(LogoBlock)`
  position: fixed;
  background-color: ${(props) => (props.color ? props.color : '#000')};
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 2px;
  transition: background-color 200ms ease-in;
  @media not all and (hover: none) {
    &:hover {
      background-color: #333;
    }
  }
`;

const RightSide = styled.div`
  margin: 17px 16px 0 16px;
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

const Line = styled.div`
  height: 1px;
  background-color: black;
`;

const Description = styled.div`
  padding-top: 4px;
  font-family: Inter, Helvetica;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0.095em;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    font-weight: 400;
  }
`;
