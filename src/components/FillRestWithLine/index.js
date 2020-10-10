import { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useAmp } from 'next/amp';

const TextAndLine = (props) => {
  const [lineWidth, setLineWidth] = useState(100);
  const [isEmpty, setIsEmpty] = useState(false);
  const wrapperRef = useRef(null);
  const innerContentRef = useRef(null);

  const handleResize = useCallback(() => {
    if (innerContentRef.current && wrapperRef.current) {
      //-- wrapped in a set timeout so that it's delayed until after the render
      setTimeout(() => {
        const w = innerContentRef.current.getBoundingClientRect().width;
        const totalW = wrapperRef.current.getBoundingClientRect().width;
        const shouldBeEmpty = w === 0 || Math.abs(totalW - w) < 50;
        const lineW = shouldBeEmpty ? 0 : totalW - w - 36; //-- totalWidth - textWidth - borderRadius*2 - marginLeft
        setIsEmpty(shouldBeEmpty);
        setLineWidth(lineW);
      }, 0);
    }
  }, [wrapperRef, innerContentRef]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  //-- escape for AMP
  const isAmp = useAmp();
  if (isAmp) return <span>{props.children}</span>;

  const isReversed = props.align === 'right';
  return (
    <span ref={wrapperRef}>
      <Container>
        {isReversed && <Line isReversed={isReversed} lineWidth={lineWidth} isEmpty={isEmpty} />}
        <span ref={innerContentRef}>{props.children}</span>
        {!isReversed && <Line isReversed={isReversed} lineWidth={lineWidth} isEmpty={isEmpty} />}
      </Container>
    </span>
  );
};

TextAndLine.propTypes = {
  align: PropTypes.string,
};

TextAndLine.defaultProps = {
  align: 'left',
};

export default TextAndLine;

const Container = styled.div`
  width: 100%;
`;

const Line = styled.div`
  display: inline-block;
  box-sizing: border-box;
  height: 0;
  width: ${(props) => (props.lineWidth ? props.lineWidth + 'px' : 0)};
  border: ${(props) => (props.isEmpty ? '0' : '3px solid #333')};
  border-radius: 3px;
  margin-left: ${(props) => (props.isReversed ? 0 : props.isEmpty ? 0 : 20)}px;
  margin-right: ${(props) => (props.isReversed ? (props.isEmpty ? 0 : 20) : 0)}px;
  margin-bottom: 6px;
  @media screen and (max-width: 768px) {
    border-radius: 2px;
    border-width: 2px;
    margin-bottom: 3px;
  }
`;
