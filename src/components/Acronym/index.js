import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useAmp } from 'next/amp';

/*
Expands an acronym to the full text. Toggleable

Usage:
<Acronym long='Central Intelligence Agency'>CIA</Acronym>

Text-decoration style not supported on mobile, so maybe have to switch to border-bottom
*/

const AcronymContainer = styled.span`
  border-bottom: ${(p) => (p.isExpanded ? 'none' : '1px dashed #333')};
  cursor: pointer;
  outline: none;

  @media not all and (hover: none) {
    &:hover {
      border-bottom: ${(p) => (p.toggleable ? '1px solid black' : 'none')};
    }
  }
  &:focus {
    background-color: linen;
  }
`;

const Acronym = (props) => {
  const [textDisplayed, setTextDisplayed] = useState(props.children);
  const [isExpanded, setIsExpanded] = useState(false);
  const [didExpand, setDidExpand] = useState(false);
  const textRef = useRef(null);
  const isAmp = useAmp();
  const selectText = () => {
    if (!textRef.current) return;
    let text = textRef.current;
    let range, selection;
    if (document.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(text);
      range.select();
    } else if (window.getSelection) {
      selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  //-- toggle between expanded and acronym
  const handleClick = (e) => {
    if (!e.keyCode || e.keyCode === 13 || e.keyCode === 32) {
      e.preventDefault();
      let currentlyIsExpanded = !isExpanded;
      if (!props.toggleable && didExpand) {
        currentlyIsExpanded = true;
      } //-- force it to stay expanded
      currentlyIsExpanded ? setTextDisplayed(props.long) : setTextDisplayed(props.children);
      setDidExpand(true);
      setIsExpanded(currentlyIsExpanded);
      if (props.highlightOnClick) {
        selectText();
      }
    }
  };

  //-- without some craziness, in AMP, the acronym is not toggleable. You can only exapnd it once.
  //-- role="button" for space/enter key to work. I would prefer it to be a role.defintion
  if (isAmp) {
    const key = props.children.key;
    return (
      <AcronymContainer
        role="button"
        tabIndex="0"
        toggleable={false}
        on={`tap:${key}.toggleVisibility`}
      >
        <span>{props.children}</span>
        <span hidden id={key}>{` (${props.long})`}</span>
      </AcronymContainer>
    );
  } else {
    return (
      <AcronymContainer
        role="definition"
        tabIndex="0"
        isExpanded={isExpanded}
        toggleable={props.toggleable}
        onClick={handleClick}
        onKeyDown={handleClick}
        ref={textRef}
      >
        {textDisplayed}
      </AcronymContainer>
    );
  }
};

Acronym.propTypes = {
  long: PropTypes.string.isRequired,
  toggleable: PropTypes.bool,
  highlightOnClick: PropTypes.bool,
};

Acronym.defaultProps = {
  long: '',
  toggleable: true,
  highlightOnClick: false,
};

export default Acronym;
