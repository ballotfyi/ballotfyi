import styled from 'styled-components';

export const Space = styled.div`
  height: ${(props) => (props.h ? props.h : 10)}px;
  @media screen and (max-width: 576px) {
    height: ${(props) => (props.xsHeight ? props.xsHeight : props.height)}px;
  }
`;

export const LinkOut = (props) => (
  <a
    style={props.style}
    href={props.href || '#'}
    target="_blank"
    rel="noreferrer noopener"
    tabIndex="0"
  >
    {props.children}
  </a>
);

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

/*
<Col 
  off={{ xs: 2, sm: 3, md: 2, lg: 2, xl: 2, xxl: 3 }} 
  span={{ xs: 20, sm: 18, md: 14, lg: 14, xl: 14, xxl: 15 }} 
>
*/
export const Col = styled.div`
  margin-left: ${(props) => (props.off.xs / 24) * 100}%;
  width: ${(props) => (props.span.xs / 24) * 100}%;

  @media screen and (min-width: 576px) {
    margin-left: ${(props) => (props.off.sm / 24) * 100}%;
    width: ${(props) => (props.span.sm / 24) * 100}%;
  }
  @media screen and (min-width: 768px) {
    margin-left: ${(props) => (props.off.md / 24) * 100}%;
    width: ${(props) => (props.span.md / 24) * 100}%;
  }
  @media screen and (min-width: 992px) {
    margin-left: ${(props) => (props.off.lg / 24) * 100}%;
    width: ${(props) => (props.span.lg / 24) * 100}%;
  }
  @media screen and (min-width: 1200px) {
    margin-left: ${(props) => (props.off.xl / 24) * 100}%;
    width: ${(props) => (props.span.xl / 24) * 100}%;
  }
  @media screen and (min-width: 1600px) {
    margin-left: ${(props) => (props.off.xxl / 24) * 100}%;
    width: ${(props) => (props.span.xxl / 24) * 100}%;
  }
`;

export const breakpoints = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
};

export const getNextAndPrevPropNum = (n) => {
  let adj = { next: n + 1, prev: n - 1 };
  if (n === 14) {
    adj.prev = 25;
  } else if (n === 25) {
    adj.next = 14;
  }
  return adj;
};

// export const NoiseBackground = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: conic-gradient(from 325deg at 0% -4%, rgba(255,255,255,0), black),url(/static/noise.svg);
//   filter: contrast(170%) brightness(905%);
//   border-radius: 1px;
// `;

// const NoiseOffset = styled.div`
//   position: relative;
//   top: -14px;
//   left: -18px;
//   width: 100%;
//   height: 100%;
// `

// export const NoiseParent = (props) => {
//   return (
//     <NoiseBackground style={props.style}>
//       {props.children}
//     </NoiseBackground>
//   )
// }
