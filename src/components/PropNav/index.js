import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAmp } from 'next/amp';
import { useRouter } from 'next/router';
import { getNextAndPrevPropNum } from 'components/util';
import { propColors } from 'components/attributes';
import Link from 'next/link';

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
  // const isHomePage = path === '/';

  const seq = Array.from(Array(12).keys());
  const listItems = seq.map((n) => {
    const propNum = n + 14;
    return (
      <NavItem
        key={n}
        isAmp={isAmp}
        propNum={propNum}
        currentPropNum={currentPropNum}
        isPropPage={isPropPage}
      />
    );
  });

  return (
    <MenuContainer id="propNav">
      {listItems}
      <Link href={`/prop-${nextAndPrev.prev}`} passHref>
        <NavBtn>Prev</NavBtn>
      </Link>
      <Link href={`/prop-${nextAndPrev.next}`} passHref>
        <NavBtn>Next</NavBtn>
      </Link>
    </MenuContainer>
  );
};

const biteDescriptions = [
  'Prop 14: Stem Cells',
  'Prop 15: Rewrites Prop 13',
  'Prop 16: Affirmative action',
  'Prop 17: Lets parolees vote',
  'Prop 18: Lets some 17yos vote',
  'Prop 19: Property tax assessment',
  'Prop 20: Toughens criminal laws',
  'Prop 21: Rewrites Costa-Hawkins',
  'Prop 22: Uber, Lyft et al.',
  'Prop 23: Dialysis clinics',
  'Prop 24: User privacy',
  'Prop 25: Cash bail',
];

const NavItem = (props) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { propNum, isAmp, currentPropNum } = props;
  const sectionId = `prop-${propNum}-intro`;
  const { asPath } = router;

  //-- reset when route changes
  useEffect(() => {
    setIsClicked(false);
  }, [asPath]);

  //-- go to main prop page if in a current prop page, otherwise, jump to the anchor on homepage
  const handleClick = () => {
    setIsClicked(true);
  };
  const isActive = propNum === currentPropNum;
  const color = propColors[propNum];
  return (
    <Link href={`/prop-${propNum}`} passHref>
      <ItemContainer
        data-menuanchor={sectionId}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        tabIndex="-1"
      >
        <Circle
          isHovered={isHovered}
          className="propnav-circle"
          isActive={isActive}
          propColor={color}
        >
          {isAmp && propNum}
        </Circle>
        {!isAmp && (
          <MaskingCircle isClicked={isClicked} isHovered={isHovered} isActive={isActive} />
        )}
        <Label propColor={color} isHovered={isHovered}>
          {isHovered ? biteDescriptions[propNum - 14] : null}
        </Label>
      </ItemContainer>
    </Link>
  );
};

const MenuContainer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  font-family: Inter, InterPre, sans-serif;
  font-size: 12px;
  color: black;
  margin-left: 16px;
  margin-bottom: 52px;
  @media screen and (max-width: 767px) {
    margin-bottom: 10vh;
    margin-left: 8px;
  }
`;
const MaskingCircle = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  position: relative;
  left: -21px;
  border-radius: 10px;
  transform: ${(props) =>
    props.isHovered ? (props.isClicked ? 'scale(0)' : 'scale(0.4)') : 'scale(1)'};
  transition: transform 200ms ease-in;
  opacity: ${(props) => (props.isActive ? 0 : 1)};
  @media screen and (max-width: 767px) {
    width: 10px;
    height: 10px;
    left: -12px;
    border-radius: 8px;
  }
`;

const ItemContainer = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: -1px;
  margin-bottom: 4px;
  min-height: 28px;
  text-decoration: none;
  outline: none;
  &:focus {
    text-decoration: none;
    outline: none;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 2px;
  }
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 11px;
  color: white;
  border: 1px solid ${(props) => props.propColor};
  border-color: ${(props) => (props.isHovered ? props.propColor : 'transparent')};
  transition: background-color 300ms ease-in;
  background-color: ${(props) => props.propColor};
  @media screen and (max-width: 767px) {
    width: 12px;
    height: 12px;
    border-radius: 8px;
  }
`;

const Label = styled.div`
  position: relative;
  left: -21px;
  z-index: 20;
  display: flex;
  align-items: center;
  color: white;
  background-color: ${(props) => (props.propColor ? props.propColor : '#333')};
  padding: ${(props) => (props.isHovered ? '5px 15px' : '0')};
  border-radius: 15px;
  margin-left: 10px;
  font-family: Inter, InterPre, sans-serif;
  font-size: 12px;
  font-weight: 500;
  user-select: none;
  height: 18px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const NavBtn = styled.a`
  font-family: Inter, InterPre, Helvetica, sans-serif;
  font-weight: 300;
  font-size: 14px;
  padding: 0 5px;
  letter-spacing: 0.075em;
  text-transform: uppercase;
  text-decoration: none;
  margin-bottom: 40px;
  transform: rotate(90deg) translateY(-11px);
  transform-origin: left;
  cursor: pointer;
  user-select: none;
  @media not all and (hover: none) {
    &:hover {
      text-decoration: underline;
      color: mediumslateblue;
    }
  }
  &:focus {
    color: mediumslateblue;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export default PropNav;
