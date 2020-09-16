import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CitationButton from './citation-button';
import PopupContainer from './popup-container';

/*
When a Citation is clicked, a popover (CitatationPopup) appears near
the highlighted text. It will show the direct quote
from which By The Bay's text is derived from.
The article is then directly linked.

this component handles the highlighting and has a button
what happens after that is handled by popup-container

PROPS:
------------------------
	link: string.isRequired,
	publication: string.isRequired,
	headline: string.isRequired,
	quote: string.isRequired,

USAGE:
------------------------
<Citation
	noLink
	noComment
	link='https://nytimes.com/some-article/'
	publication='ny times'
	headline='X-men fight for their lives'
	quote='Professor X said all xmen are created equal.'
>
	Xavier said it directly himself. This part will be highlighted.
</Citation>

here's a blank to copy:

<Citation link="" publication="" headline="" quote="">
</Citation>

*/

const styles = {
  selectText: {
    backgroundColor: '#FFD988',
    transition: 'background-color 150ms ease-in',
  },
  deselectText: {
    backgroundColor: 'transparent',
  },
  hoverText: {
    backgroundColor: '#ffe6b0',
  },
};
const Citation = (props) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [taggedTextStyle, setTaggedTextStyle] = useState(styles.deselectText);
  const [isActive, setIsActive] = useState(false);

  // useEffect( () => {
  // 	window.addEventListener("resize", handleResize);
  // 	return( () => {
  // 		window.removeEventListener("resize", handleResize);
  // 	})
  // },[]);

  const handleTouch = (e) => {
    e.preventDefault();
    e.stopPropagation(); //-- because will propagate to click outside
    toggleVisibility();
  };

  const handleIconClick = (e) => {
    e.preventDefault();
    toggleVisibility();
  };

  const selectText = () => {
    setTaggedTextStyle(styles.hoverText);
  };
  const deselectText = () => {
    setTaggedTextStyle(styles.deselectText);
  };

  const toggleVisibility = (forceVisible) => {
    let visibility = !isPopupVisible;
    if (forceVisible !== undefined) visibility = forceVisible;
    setIsPopupVisible(visibility);
    setTaggedTextStyle(visibility ? styles.selectText : styles.deselectText);
    setIsActive(visibility);
  };

  // const handleClickOutside = () => {
  // 	toggleVisibility(false)
  // }

  return (
    <span>
      <span style={taggedTextStyle}>
        {props.children}
        <CitationButton
          onTouchEnd={handleTouch}
          isActive={isActive}
          onHover={selectText}
          onMouseLeave={deselectText}
          onClick={handleIconClick}
        />
      </span>

      {isPopupVisible && (
        <React.Fragment>
          <PopupContainer toggleVisibility={toggleVisibility} {...props}>
            {props.children}
          </PopupContainer>
        </React.Fragment>
      )}
    </span>
  );
};
Citation.propTypes = {
  link: PropTypes.string,
  publication: PropTypes.string,
  headline: PropTypes.string,
  quote: PropTypes.string,
};

export default Citation;
