import styled from 'styled-components';
import Link from 'next/link';

const Footer = React.forwardRef((props, ref) => {
  const left = [
    {
      label: 'Props',
      link: '/',
    },
    {
      label: 'About',
      link: '/about',
    },
  ];

  const right = [
    {
      label: 'Privacy',
      link: '/privacy',
    },
  ];

  const leftItems = left.map((item) => (
    <Link href={item.link} key={item.link} passHref>
      <FooterItem>{item.label}</FooterItem>
    </Link>
  ));
  const rightItems = right.map((item) => (
    <Link href={item.link} key={item.link} passHref>
      <FooterItem>{item.label}</FooterItem>
    </Link>
  ));

  return (
    <Container>
      <Background />
      <Toolbar ref={ref}>
        <Set>
          <Link href="/">
            <Logo>ballot.fyi</Logo>
          </Link>
          {leftItems}
        </Set>
        <Set>{rightItems}</Set>
      </Toolbar>
    </Container>
  );
});

export default Footer;

const Background = styled.div`
  height: 100%;
  background: conic-gradient(from 325deg at 0% -4%, rgba(255,255,255,0), black),url(/static/noise.svg);
  filter: contrast(170%) brightness(905%);
  border-radius: 21px;
  @media not all and (min-resolution:.001dpcm) { 
    @media {
      background: conic-gradient(from 195deg at -10% -4%,rgba(255,255,255,0),black),url(/static/noise.svg);
      filter: contrast(220%) brightness(635%)
    }
  }
`;

const Logo = styled.div`
  font-family: 'ITC Avant Garde', Inter, sans-serif;
  font-size: 14px;
  background-color: white;
  color: black;
  padding-left: 20px;
  padding-right: 20px;
  height: 36px;
  display: flex;
  align-items: center;
  border-radius: 21px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    height: 35px;
  }
  @media screen and (max-width: 576px) {
    height: 30px;
  }
`;

const Set = styled.div`
  display: flex;
  align-items: center;
`;

const Toolbar = styled.div`
  position: relative;
  top: -100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 36px;
  width: calc(100% - 32px);
  margin-left: 16px;
  position: sticky;
  bottom: 16px;
  border-radius: 21px;
  border: 3px solid #fff;

  box-shadow: 4px -7px 40px 30px rgba(0, 0, 0, 0.045);
  @media screen and (max-width: 768px) {
    width: calc(100% - 24px);
    margin-left: 12px;
    bottom: 12px;
    height: 35px;
  }
  @media screen and (max-width: 576px) {
    width: calc(100% - 16px);
    margin-left: 8px;
    bottom: 8px;
    height: 30px;
  }
`;

const FooterItem = styled.a`
  display: flex;
  align-items: center;
  font-family: Inter, Helvetica;
  font-size: 12px;
  letter-spacing: 0.195em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 5px 20px;
  cursor: pointer;
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
  color: black;
  transition: all 200ms ease-out;
  border-radius: 21px;
  @media screen and (max-width: 768px) {
    padding: 0 10px;
    margin-left: 5px;
    margin-right: 5px;
    height: 35px;
  }
  @media screen and (max-width: 576px) {
    padding: 0 5px;
    margin-left: 3px;
    margin-right: 3px;
    font-size: 10px;
    height: 30px;
  }
  @media not all and (hover: none) {
    &:hover {
      background-color: #EDDD19;
      mix-blend-mode: multiply;
    }
  }
  &:focus {
    background-color: #EDDD19;
    mix-blend-mode: multiply;
  }
`;
