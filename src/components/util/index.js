import styled from 'styled-components';

export const Space = styled.div`
  height: ${(props) => (props.h ? props.h : 10)}px;
  @media screen and (max-width: 576px) {
    height: ${(props) => (props.xsHeight ? props.xsHeight : props.height)}px;
  }
`;
