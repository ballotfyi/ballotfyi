import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getNextAndPrevPropNum } from 'components/util';

const Footer = React.forwardRef((props, ref) => {
  const [windowWidth, setWindowWidth] = useState(1000);
  const router = useRouter();

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth || document.documentElement.clientWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const propPageRegex = /prop-\d\d/i;
  const path = router.asPath;
  const isPropPage = propPageRegex.test(path);
  const currentPropNum = isPropPage ? parseInt(path.match(propPageRegex)[0].split('-')[1]) : null;
  const nextAndPrev = currentPropNum
    ? getNextAndPrevPropNum(currentPropNum)
    : { prev: null, next: null };
  // const isHomePage = path === '/';
  const isMobile = windowWidth < 768;

  const items = [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'About',
      link: '/about',
    },
    {
      label: 'Privacy',
      link: '/privacy',
    },
  ];

  const linkItems = items.map((item) => (
    <Link href={item.link} key={item.link} passHref scroll>
      <FooterItem>{item.label}</FooterItem>
    </Link>
  ));
  return (
    <Container ref={ref}>
      <Set>{linkItems}</Set>
      {isPropPage && isMobile && (
        <Set>
          <FooterItem href={`/prop-${nextAndPrev.prev}`} passHref scroll>
            Prev
          </FooterItem>
          <FooterItem href={`/prop-${nextAndPrev.next}`} passHref scroll>
            Next
          </FooterItem>
        </Set>
      )}
    </Container>
  );
});

export default Footer;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  box-sizing: border-box;
  bottom: 0;
  background-color: white;
  box-shadow: 0 -1px 5px 3px rgba(20, 20, 0, 0.043);
  @media screen and (max-width 767px) {
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Set = styled.div`
  display: flex;
  align-items: center;
`;

const FooterItem = styled.a`
  display: flex;
  align-items: center;
  font-family: Inter, InterPre, Helvetica, sans-serif;
  font-size: 12px;
  letter-spacing: 0.095em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 5px 20px;
  cursor: pointer;
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
  color: black;
  transition: all 200ms ease-out;
  @media screen and (max-width 767px) {
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
      background-color: #BEE3E3;
    }
  }
  &:focus {
    background-color: #BEE3E3;
  }
`;
