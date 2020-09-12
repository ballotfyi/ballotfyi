import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useAmp } from 'next/amp';
import { propColors } from 'components/attributes';

const LinkItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { propNum, isAmp } = props;
  return (
    <Link href={`prop-${propNum}`}>
      <Item
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        propNum={propNum}
      >
        {isHovered || isAmp ? propNum : null}
      </Item>
    </Link>
  );
};

const PropNav = () => {
  const isAmp = useAmp();
  const propNums = Array.from(Array(12).keys());
  const propLinks = propNums.map((n) => {
    const propNum = n + 14;
    return <LinkItem key={propNum} isAmp={isAmp} propNum={propNum} />;
  });

  return (
    <Placement>
      <Absolute>
        <Container>{propLinks}</Container>
      </Absolute>
    </Placement>
  );
};

const Absolute = styled.div`
  position: absolute;
`;

const Placement = styled.div`
  position: sticky;
  left: 0;
  top: 100px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-left: 5px;
`;

const Item = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 11px;
  margin-bottom: 4px;
  background-color: ${(props) => (props.propNum ? propColors[props.propNum] : '#222')};
  color: white;
  font-family: Inter, InterPre, sans-serif;
  font-size: 12px;
  font-weight: 750;
  cursor: pointer;
  @media not all and (hover: none) {
    &:hover {
      background-color: #222;
    }
  }
  user-select: none;
`;

export default PropNav;
