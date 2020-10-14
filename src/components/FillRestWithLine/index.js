import { useState, useRef, useEffect, useLayoutEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useAmp } from 'next/amp';

const TextAndLineParent = (props) => {
  const [showLine, setShowLine] = useState(0);
  const wrapperRef = useRef(null);
  const textRef = useRef(null);

  // Wait until after client-side hydration to show
  useEffect(() => {
    setShowLine(1);
  }, []);

  useEffect(() => {
    function handleResize() {
      setShowLine((prev) => prev + 1);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //-- escape for AMP
  const isAmp = useAmp();
  if (isAmp) return <span>{props.children}</span>;

  if (!showLine) {
    return null;
  }

  return (
    <Container ref={wrapperRef}>
      <Text ref={textRef}>{props.children}</Text>
      {showLine && <LineFill textRef={textRef} wrapperRef={wrapperRef} />}
    </Container>
  );
};

const LineFill = (props) => {
  const [lineWidth, setLineWidth] = useState(50);
  const { textRef, wrapperRef } = props;
  const textWidth = textRef && textRef.current ? textRef.current.getBoundingClientRect().width : 0;
  const totalWidth =
    wrapperRef && wrapperRef.current ? wrapperRef.current.getBoundingClientRect().width : 0;

  useLayoutEffect(() => {
    setTimeout(() => {
      const shouldBeEmpty = textWidth === 0 || Math.abs(totalWidth - textWidth) < 50;
      const lineW = shouldBeEmpty ? 0 : totalWidth - textWidth - 46; //-- totalWidth - textWidth - borderRadius*2 - marginLeft
      setLineWidth(lineW);
    }, 200);
  }, [textWidth, totalWidth]);

  return <Line lineWidth={lineWidth} />;
};

export default TextAndLineParent;

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Text = styled.div`
  display: inline;
`;

const Line = styled.div.attrs((props) => ({
  style: {
    width: props.lineWidth,
  },
}))`
  display: inline-block;
  box-sizing: border-box;
  height: 0;
  border: ${(props) => (props.lineWidth === 0 ? '0' : '3px solid #333')};
  border-radius: 3px;
  margin-left: ${(props) => (props.lineWidth === 0 ? 0 : 20)}px;
  margin-right: ${(props) => (props.lineWidth === 0 ? 0 : 20)}px;
  margin-bottom: 6px;
  @media screen and (max-width: 767px) {
    border-radius: 2px;
    border-width: 2px;
    margin-bottom: 3px;
  }
`;
