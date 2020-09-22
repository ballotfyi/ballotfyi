import React from 'react';
import styled from 'styled-components';

const CitationButton = (props) => {
  const handleMouseEnter = () => {
    if (!props.isActive) {
      props.onHover();
    }
  };

  const handleMouseLeave = () => {
    if (!props.isActive) {
      props.onMouseLeave();
    }
  };

  const { onClick, onTouchStart, isActive } = props;
  return (
    <Icon
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchEnd={onTouchStart}
      isActive={isActive}
    >
      <DotContainer>
        <Dot isActive={isActive} />
        <Dot isActive={isActive} />
        <Dot isActive={isActive} />
      </DotContainer>
    </Icon>
  );
};

CitationButton.defaultProps = {
  isActive: false,
};

export default CitationButton;

const Icon = styled.button`
  display: inline-block;
  position: relative;
  top: -4.5px;
  margin-left: 4px;
  line-height: 0;
  padding: 0;
  background-color: ${(props) => (props.isActive ? 'navy' : 'CORAL')};
  border-radius: 7px;
  pointer-events: auto;
  cursor: pointer;
  border: none;
  box-sizing: border-box;
  @media not all and (hover: none) {
    &:hover {
      border-color: transparent;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;

const DotContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 14px;
  width: 14px;
`;

const Dot = styled.span`
  display: block;
  width: 2px;
  height: 2px;
  background-color: white;
  border-radius: 1px;
`;
