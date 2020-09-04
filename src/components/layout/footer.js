import styled from 'styled-components';
import Link from 'next/link';

const Logo = styled.div`
  font-family: 'ITC Avant Garde', Inter, sans-serif;
  font-size: 14px;
  background-color: #121212;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  height: 40px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 35px;
  }
  @media screen and (max-width: 576px) {
    height: 30px;
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  height: 40px;
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 -5px 50px 30px rgba(0, 0, 0, 0.035);
  background-color: white;
  @media screen and (max-width: 768px) {
    height: 35px;
  }
  @media screen and (max-width: 576px) {
    height: 30px;
  }
`;

const FooterItem = styled.a`
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
  border-radius: 15px;
  color: #222;
  @media screen and (max-width: 768px) {
    padding: 5px 10px;
  }
  @media not all and (hover: none) {
    &:hover {
      color: white;
      background-color: rgba(0, 0, 255, 0.3);
    }
  }
  &:focus {
    color: white;
    background-color: rgba(0, 0, 255, 0.3);
  }
`;

const Footer = React.forwardRef((props, ref) => {
  const left = [
    {
      label: 'Home',
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
    <Container ref={ref}>
      <LeftSide>
        <Logo>ballot.fyi</Logo>
        {leftItems}
      </LeftSide>
      <div>{rightItems}</div>
    </Container>
  );
});

export default Footer;
