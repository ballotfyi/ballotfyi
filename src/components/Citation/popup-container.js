import React, { useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CitationCard from './citation-card';
/*
When a PopupContainer is clicked, a popover appears over
the highlighted text. It will show the direct quote
from which By The Bay's text is derived from.
The article is then directly linked.

PROPS:
------------------------
	toggleVisibility: function.isRequired
	clickPos: number, //--used to scroll into position


USAGE:
will likely be used inside a parent component
------------------------
<PopupContainer
	toggleVisibility={this.toggleVisibility}
	{...this.props}
*/

const popupDimensions = {
  height: 220,
  width: 245,
};

///------------------------------------------------
const PopupContainer = (props) => {
  // const [windowWidth, setWindowWidth] = useState(
  //   window.innerWidth || document.documentElement.clientWidth
  // );
  const containerRef = useRef();
  const { toggleVisibility } = props;

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [containerRef]);

  //-- listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleKeyDown, handleResize, handleScroll]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        toggleVisibility(false);
      }
    },
    [toggleVisibility]
  );

  const handleResize = useCallback(() => {
    // setWindowWidth(window.innerWidth || document.documentElement.clientWidth);
    toggleVisibility(false);
  }, [toggleVisibility]);

  const handleScroll = useCallback(() => {
    //-- dismiss after user scrolls past it
    const height = window.innerHeight || document.documentElement.clientHeight;
    const bottomOfPopup = containerRef.current
      ? containerRef.current.getBoundingClientRect().bottom
      : 0;
    if (bottomOfPopup < -100 || bottomOfPopup - height > 100) {
      toggleVisibility(false);
    }
  }, [toggleVisibility, containerRef]);

  return (
    <PopupPosition ref={containerRef}>
      <Container>
        <CitationCard {...props} />
      </Container>
    </PopupPosition>
  );
};

PopupContainer.propTypes = {
  toggleVisibility: PropTypes.func.isRequired, //-- to give access to the the visibility function
  noComment: PropTypes.bool, //-- in case you don't want the comment card
};

export default PopupContainer;

const PopupPosition = styled.span`
  position: absolute;
  left: 20px;
  z-index: 3;
  transform: translateY(-${popupDimensions.height - 100}px);
  @media screen and (max-width: 767px) {
    position: static;
    width: 100%;
  }
`;

const Container = styled.span`
  font-family: Inter, Helvetica, sans-serif;
  position: absolute;
  display: inline-block;
  width: ${popupDimensions.width}px;
  overflow: hidden;
  box-shadow: 12px 12px 2px rgba(0, 0, 0, 0.1), -20px 16px 2px rgba(0, 0, 0, 0.04);
  color: white;
  border-radius: 4px;
  @media screen and (max-width: 767px) {
    border-radius: 0;
    max-height: 270;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 3;
  }
`;
