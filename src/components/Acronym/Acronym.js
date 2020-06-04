import {useState, useRef} from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useAmp} from 'next/amp'
/*
Expands an acronym to the full text. Toggleable

Usage:
<Acronym acronym='CIA' expanded='Central Intelligence Agency' />

Text-decoration style not supported on mobile, so maybe have to switch to border-bottom
*/

// text-decoration: ${p => p.isExpanded ? 'none' : 'underline dotted black'};
const AcronymContainer = styled.span`
  border-bottom: ${p => p.isExpanded ? 'none' : '1px dashed #333'};
  cursor: pointer;

	@media not all and (hover: none) {
		&:hover {
      border-bottom: ${p => p.toggleable ? '1px solid black' : 'none'};
    }
  }
`;

const Acronym = (props) => {
  const [textDisplayed, setTextDisplayed] = useState(props.acronym);
  const [isExpanded, setIsExpanded] = useState(false);
  const [didExpand, setDidExpand] = useState(false);
  const textRef = useRef(null);

	const selectText = () => {
    if(!textRef.current) return;
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
	}


	//-- toggle between expanded and acronym
	const handleClick = (e) => {
    if (!e.keyCode || e.keyCode === 13 || e.keyCode === 32) {
      e.preventDefault();
      let currentlyIsExpanded = !isExpanded
      if(!props.toggleable && didExpand) {
        currentlyIsExpanded = true;
      } //-- force it to stay expanded
      currentlyIsExpanded ? setTextDisplayed(props.expanded) : setTextDisplayed(props.acronym)
      setDidExpand(true);
      setIsExpanded(currentlyIsExpanded);
      if(props.highlightOnClick){ selectText() }
    }
	}

  //-- without some craziness, in AMP, the acronym is not toggleable. You can only exapnd it once.
  //-- role="button" for space/enter key to work. I would prefer it to be a role.defintion
  if(useAmp()) {
    return (
      <AcronymContainer
        role="button"
        tabIndex="0"
        toggleable={false}
        data-amp-bind-text="displayedText"
        data-amp-bind-class="containerClass"
        on={`tap:AMP.setState({displayedText:'${props.expanded}', containerClass: 'unstyled'})`}
      >
        {props.acronym}
      </AcronymContainer>
    )
  } else {
    return(
      <AcronymContainer
        role="definition"
        tabIndex="0"
        aria-expanded={isExpanded}
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
	
}

Acronym.propTypes = {
	acronym: PropTypes.string.isRequired,
	expanded: PropTypes.string.isRequired,
	toggleable: PropTypes.bool,
	highlightOnClick: PropTypes.bool,
}

Acronym.defaultProps = {
  acronym: '',
  expanded: '',
	toggleable: true,
	highlightOnClick: false,
}
export default Acronym
