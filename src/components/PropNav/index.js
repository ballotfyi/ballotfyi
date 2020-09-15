import { useState } from 'react';
import styled from 'styled-components';
// import Link from 'next/link';
import { useAmp } from 'next/amp';

const PropNav = (props) => {
  const isAmp = useAmp();
  const seq = Array.from(Array(12).keys());
  const listItems = seq.map((n) => {
    const propNum = n+14;
    const sectionId = `prop-${propNum}-intro`
    return (
      <NavItem 
        key={n} 
        data-menuanchor={sectionId}
        isAmp={isAmp}
        propNum={propNum}
      >
      </NavItem>
    );
  });
  return (
    <MenuContainer id="propNav">
      {listItems}
      <NavBtn onClick={() => props.comp.fullpageApi.moveSectionUp()}>Prev</NavBtn>
      <NavBtn onClick={() => props.comp.fullpageApi.moveSectionDown()}>Next</NavBtn> 
    </MenuContainer>
  )
}


const NavItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { propNum, isAmp } = props;
  const sectionId = `prop-${propNum}-intro`

  // <Link href={`prop-${propNum}`}>
  // </Link>
  return (
    <a href={`#${sectionId}`}>
      <ItemContainer
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      > 
        <Circle />
        <Label>
          {isHovered || isAmp ? `Prop ${propNum}` : null}
        </Label>
      </ItemContainer>
    </a>
  );
};


const MenuContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-top: 19%;
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
`;

const Label = styled.span`
  color: black;
  margin-left: 10px;
  font-family: Inter, InterPre, sans-serif;
  font-size: 12px;
  font-weight: 500;
  user-select: none;
  height: 20px;
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
`;
// background-color: ${(props) => (props.propNum ? propColors[props.propNum] : '#222')};



export default PropNav;
