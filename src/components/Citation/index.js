import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import CitationButton from './citation-button';
import PopupContainer from './popup-container';
// import {AmpState} from 'components/amp/amp-wrappers';
import {useAmp} from 'next/amp';
/*
here's a blank to copy:

<Citation link="" publication="" headline="" quote="">
</Citation>
*/

const styles = {
  selectText: {
    backgroundColor: '#c7edff',
    transition: 'background-color 150ms ease-in',
  },
  deselectText: {
    backgroundColor: 'transparent',
  },
  hoverText: {
    backgroundColor: '#ffec96',
  },
};

const Citation = (props) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [taggedTextStyle, setTaggedTextStyle] = useState(styles.deselectText);
  const [isActive, setIsActive] = useState(false);
  const clickOutsideRef = useRef();
  const isAmp = useAmp();

  const toggleVisibility = useCallback(
    (forceVisible) => {
      let visibility = !isPopupVisible;
      if (forceVisible !== undefined) visibility = forceVisible;
      setIsPopupVisible(visibility);
      setTaggedTextStyle(visibility ? styles.selectText : styles.deselectText);
      setIsActive(visibility);
    },
    [isPopupVisible]
  );

  //--click outside handler
  useEffect(() => {
    function handleClickOutside(event) {
      if (clickOutsideRef.current && !clickOutsideRef.current.contains(event.target)) {
        toggleVisibility(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [clickOutsideRef, toggleVisibility]);

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

  if( !isAmp ) {
    return (
      <span ref={clickOutsideRef}>
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
          <PopupContainer toggleVisibility={toggleVisibility} {...props} />
        )}
      </span>
    );
  } else {
    const key = props.children.key;
    return (
      <>
        <span style={taggedTextStyle}>
          {props.children}
          <CitationButton
            on={`tap:${key}.toggleVisibility`}
          />
        </span>
        <PopupContainer 
          {...props}
          toggleVisibility={`tap:${key}.toggleVisibility`}
          id={`${key}`}
        />
      </>
    )
  }
};

Citation.propTypes = {
  link: PropTypes.string,
  publication: PropTypes.string,
  headline: PropTypes.string,
  quote: PropTypes.string,
};

export default Citation;
