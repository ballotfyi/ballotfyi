import React, { useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CitationCard from './citation-card';
import { useAmp } from 'next/amp';

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
  // const [windowWidth, setWindowWidth] = useState(1000);
  const containerRef = useRef();
  const { toggleVisibility } = props;
  const isAmp = useAmp();

  //-- only do this for mobile
  useEffect(() => {
    if (containerRef.current) {
      // const popupTop = containerRef.current.getBoundingClientRect().top;
      // const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      // window.scrollTo({
      //   top: popupTop + window.scrollY - windowHeight/2 + popupDimensions.height/2,
      //   behavior: 'smooth'
      // });
    }
  }, [containerRef]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        toggleVisibility(false);
      }
    },
    [toggleVisibility]
  );

  const handleResize = useCallback(() => {
    toggleVisibility(false);
  }, [toggleVisibility]);

  const handleScroll = useCallback(() => {
    //-- dismiss after user scrolls past it (in desktop)
    const height = window.innerHeight || document.documentElement.clientHeight;
    const bottomOfPopup = containerRef.current
      ? containerRef.current.getBoundingClientRect().bottom
      : 0;
    if (bottomOfPopup < -100 || bottomOfPopup - height > 100) {
      toggleVisibility(false);
    }
  }, [toggleVisibility, containerRef]);

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

  return (
    <PopupPosition hidden={isAmp} id={props.id} ref={containerRef}>
      <Container>
        <CitationCard {...props} />
      </Container>
    </PopupPosition>
  );
};

PopupContainer.propTypes = {
  toggleVisibility: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired, //-- to give access to the the visibility function
  noComment: PropTypes.bool, //-- in case you don't want the comment card
};

export default PopupContainer;

const PopupPosition = styled.span`
  position: absolute;
  right: calc(5% + ${popupDimensions.width}px);
  transform: translateY(-${popupDimensions.height / 2}px);
  @media screen and (max-width: 767px) {
    position: static;
    width: 100%;
  }
`;

const Container = styled.span`
  position: absolute;
  display: inline-block;
  width: ${popupDimensions.width}px;
  color: white;
  border-radius: 4px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.15), 0 18px 36px -18px rgba(0, 0, 0, 0.22);
  @media screen and (max-width: 767px) {
    box-shadow: 0 -5px 60px -12px rgba(50, 50, 93, 0.25), 0 -10px 36px -18px rgba(0, 0, 0, 0.3);
    border-radius: 0;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 40;
    padding-bottom: 36px;
  }
`;
