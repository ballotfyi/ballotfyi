import {useState, useRef} from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

/*
Expands an acronym to the full text. Toggleable

Usage:
<Acronym acronym='CIA' expanded='Central Intelligence Agency' />

Text-decoration style not supported on mobile, so maybe have to switch to border-bottom
*/

// text-decoration: ${p => p.isExpanded ? 'none' : 'underline dotted black'};
const AcronymContainer = styled.span`
  border-bottom: ${p => p.isExpanded ? 'none' : '1px solid #333'};
  cursor: pointer;

	@media not all and (hover: none) {
		&:hover {
      border-bottom: 1px solid black;
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
		const currentlyIsExpanded = !isExpanded
		if(!props.toggleable && didExpand) {
			currentlyIsExpanded = true;
		} //-- force it to stay expanded
		currentlyIsExpanded ? setTextDisplayed(props.expanded) : setTextDisplayed(props.acronym)
    setDidExpand(true);
    setIsExpanded(currentlyIsExpanded);
		if(props.highlightOnClick){ selectText() }
	}

  return(
    <AcronymContainer
      isExpanded={isExpanded}
      onClick={handleClick}
      ref={textRef}        
    >
      {textDisplayed}
    </AcronymContainer>

  );
	
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
