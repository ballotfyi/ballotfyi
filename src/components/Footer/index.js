import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getNextAndPrevPropNum } from 'components/util';
import { useAmp } from 'next/amp';

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
  const isAmp = useAmp();
  const isProd = process.env.NODE_ENV === 'production'; // eslint-disable-line
  const ampAddon = isAmp ? (isProd ? '.amp' : '?amp=1') : '';
  const items = [
    {
      label: 'Home',
      link: '/',
      showOnPropPages: true,
    },
    {
      label: 'About',
      link: '/about',
      showOnPropPages: true,
    },
    {
      label: 'Privacy',
      link: '/privacy',
      showOnPropPages: false,
    },
  ];

  const linkItems = items.map((item) => {
    if (!isPropPage || (isPropPage && item.showOnPropPages)) {
      return (
        <Link href={item.link + ampAddon} key={item.link} passHref scroll>
          <FooterItem>{item.label}</FooterItem>
        </Link>
      );
    } else {
      return <div key={item.link} />;
    }
  });
  return (
    <Container isPropPage={isPropPage} ref={ref}>
      <Set>{linkItems}</Set>
      {isPropPage && isMobile && (
        <Set>
          <FooterItem href={`/prop-${nextAndPrev.prev}` + ampAddon} passHref scroll>
            {`< `}Prev
          </FooterItem>
          <FooterItem href={`/prop-${nextAndPrev.next}` + ampAddon} passHref scroll>
            Next{` >`}
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
  bottom: 0;
  z-index: 50;
  width: 100vw;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 0 -1px 5px 3px rgba(20, 20, 0, 0.043);
  @media screen and (max-width: 767px) {
    justify-content: ${(props) => (props.isPropPage ? 'space-between' : 'center')};
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
  font-size: 0.75em;
  letter-spacing: 0.095em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 7px 20px;
  cursor: pointer;
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
  color: black;
  transition: all 200ms ease-out;
  @media screen and (max-width: 767px) {
    padding: 0 10px;
    margin-left: 5px;
    margin-right: 5px;
    height: 39px;
  }
  @media screen and (max-width: 576px) {
    padding: 0 9px;
    margin-left: 3px;
    margin-right: 3px;
    font-size: 10px;
    height: 36px;
  }
  @media not all and (hover: none) {
    &:hover {
      background-color: #bee3e3;
    }
  }
  &:focus {
    background-color: #bee3e3;
  }
`;
