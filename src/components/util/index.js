import styled from 'styled-components';

export const Space = styled.div`
  height: ${(props) => (props.height ? props.height : 10)}px;
  @media screen and (max-width: 767px) {
    height: ${(props) => (props.xsHeight ? props.xsHeight : props.height)}px;
  }
`;
