import { useState, useEffect, useCallback } from "react";

/**
 * custom hook provides the logic for a scroll to top (of page) button that shows after the window is scrolled
 * down a specified percentage (0-1). Returns a ref to component, function to handle click
 * and optional isDisplayed bool
 * @param {number} showOnVertPercentage
 */

const useScrollToTop = (showOnVertPercentage) => {
  //-- default scroll percentage to show button
  showOnVertPercentage = showOnVertPercentage ? showOnVertPercentage : 0.5;

  const [containerHeight, setContainerHeight] = useState(1); // avoid divide by 0
  const [isDisplayed, setIsDisplayed] = useState(false);

  //-- pass ref as function to and get parent element's height
  const ref = useCallback((elem) => {
    if (elem && elem.parentElement) {
      setContainerHeight(elem.parentElement.getBoundingClientRect().height);
    }
  }, []);

  //-- attach/detach scroll listener and set display bool when reaches percentage down the parent component
  useEffect(() => {
    const handleScroll = () => {
      setIsDisplayed(window.scrollY / containerHeight > showOnVertPercentage);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [containerHeight]);

  //-- provide a click handler that scrolls back to top
  const onClickHandler = useCallback((e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  //-- return the ref, a function to handle the click, and a bool isDisplayed whether it should be displayed
  return [ref, onClickHandler, isDisplayed];
};

export default useScrollToTop;
