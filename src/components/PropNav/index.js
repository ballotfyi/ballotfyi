import { useState } from 'react';
import styled from 'styled-components';
import { useAmp } from 'next/amp';
import { useRouter } from 'next/router';
import { getNextAndPrevPropNum } from 'components/util';

const PropNav = () => {
  const isAmp = useAmp();
  const router = useRouter();

  const propPageRegex = /prop-\d\d/i;
  const path = router.asPath;
  const isPropPage = propPageRegex.test(path);
  const currentPropNum = isPropPage ? parseInt(path.match(propPageRegex)[0].split('-')[1]) : null;
  const nextAndPrev = currentPropNum
    ? getNextAndPrevPropNum(currentPropNum)
    : { prev: null, next: null };
  const isHomePage = path === '/';

  const seq = Array.from(Array(12).keys());
  const listItems = seq.map((n) => {
    const propNum = n + 14;
    return <NavItem key={n} isAmp={isAmp} propNum={propNum} isPropPage={isPropPage} />;
  });

  return (
    <MenuContainer id="propNav">
      {listItems}
      {isHomePage && (
        <>
          <NavBtnWithEnter label="Prev" func={() => window.fullpage_api.moveSectionUp()} />
          <NavBtnWithEnter label="Next" func={() => window.fullpage_api.moveSectionDown()} />
        </>
      )}
      {isPropPage && (
        <>
          <NavBtnWithEnter label="Prev" func={() => router.push(`/prop-${nextAndPrev.prev}`)} />
          <NavBtnWithEnter label="Next" func={() => router.push(`/prop-${nextAndPrev.next}`)} />
        </>
      )}
    </MenuContainer>
  );
};

const NavBtnWithEnter = ({ label, func }) => (
  <NavBtn
    tabIndex="0"
    onClick={func}
    onKeyDown={(e) => {
      if (e.keyCode === 13) {
        func();
      }
    }}
  >
    {label}
  </NavBtn>
);

const NavItem = (props) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const { propNum, isAmp, isPropPage } = props;
  const sectionId = `prop-${propNum}-intro`;

  const handleClick = () => {
    if (isPropPage) {
      router.push(`/prop-${propNum}`);
    } else {
      window.fullpage_api.moveTo(propNum - 13);
    }
  };

  return (
    <ItemContainer
      data-menuanchor={sectionId}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <Circle className="propnav-circle" />
      <Label>{isHovered || isAmp ? `Prop ${propNum}` : null}</Label>
    </ItemContainer>
  );
};

const MenuContainer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-bottom: 42px;
  @media screen and (max-width: 768px) {
    margin-bottom: 13vh;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #333;
  transition: background-color 300ms ease-in;
  @media screen and (max-width: 768px) {
    width: 10px;
    height: 10px;
    border-radius: 5px;
  }
`;

const Label = styled.span`
  color: black;
  margin-left: 10px;
  font-family: Inter, InterPre, sans-serif;
  font-size: 12px;
  font-weight: 500;
  user-select: none;
  height: 18px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtn = styled.a`
  font-family: Inter, Helvetica;
  font-weight: 400;
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 40px;
  transform: rotate(90deg) translateY(-11px);
  transform-origin: left;
  cursor: pointer;
  user-select: none;
  @media not all and (hover: none) {
    &:hover {
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
// background-color: ${(props) => (props.propNum ? propColors[props.propNum] : '#222')};

export default PropNav;
