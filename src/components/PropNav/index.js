import { useState } from 'react';
import styled from 'styled-components';
import { useAmp } from 'next/amp';
import { useRouter } from 'next/router';
import { getNextAndPrevPropNum } from 'components/util';

const PropNav = () => {
  const isAmp = useAmp();
  const router = useRouter();

  const seq = Array.from(Array(12).keys());
  const listItems = seq.map((n) => {
    const propNum = n + 14;
    return <NavItem key={n} isAmp={isAmp} propNum={propNum}></NavItem>;
  });
  const propPageRegex = /prop-\d\d/i;
  const path = router.asPath;
  const isPropPage = propPageRegex.test(path);
  const currentPropNum = isPropPage ? parseInt(path.match(propPageRegex)[0].split('-')[1]) : null;
  const nextAndPrev = currentPropNum
    ? getNextAndPrevPropNum(currentPropNum)
    : { prev: null, next: null };
  const isHomePage = path === '/';
  return (
    <MenuContainer id="propNav">
      {listItems}
      {isHomePage && (
        <>
          <NavBtn onClick={() => window.fullpage_api.moveSectionUp()}>Prev</NavBtn>
          <NavBtn onClick={() => window.fullpage_api.moveSectionDown()}>Next</NavBtn>
        </>
      )}
      {isPropPage && (
        <>
          <NavBtn onClick={() => router.push(`/prop-${nextAndPrev.prev}`)}>Prev</NavBtn>
          <NavBtn onClick={() => router.push(`/prop-${nextAndPrev.next}`)}>Next</NavBtn>
        </>
      )}
    </MenuContainer>
  );
};

const NavItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { propNum, isAmp } = props;
  const sectionId = `prop-${propNum}-intro`;

  return (
    <ItemContainer
      data-menuanchor={sectionId}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.fullpage_api.moveTo(propNum - 13)}
    >
      <Circle className="propnav-circle" />
      <Label>{isHovered || isAmp ? `Prop ${propNum}` : null}</Label>
    </ItemContainer>
  );
};

const MenuContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-top: 30vh;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 11px;
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
  height: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtn = styled.div`
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
