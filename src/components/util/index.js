import styled from 'styled-components';

export const Space = styled.div`
  height: ${(props) => (props.h ? props.h : 10)}px;
  @media screen and (max-width: 576px) {
    height: ${(props) => (props.xsHeight ? props.xsHeight : props.height)}px;
  }
`;

export const LinkOut = (props) => (
  <a href={props.href || '#'} target="_blank" rel="noreferrer noopener" tabIndex="0">
    {props.children}
  </a>
);
