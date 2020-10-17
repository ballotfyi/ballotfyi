import styled from 'styled-components';

const goodColorPairs = [
  ['#887634', '#7e4ae4'],
  ['#52506b', '#fbb900'],
  ['#54335f', '#ff9d0c'],
  ['#4f6565', '#c0c9d0'],
  ['#bb8a1b', '#a748fb'],
  ['#af6b51', '#ca1818'],
  ['#74558c', '#e40000'],
  ['#a2a17b', '#675353'],
  ['#6d7682', '#536757'],
  ['#af6868', '#8a5494'],
  ['#4a4769', '#ffffff'],
  ['#696969', '#217fc1'],
];

const NoiseBackground = (props) => {
  const { propNum } = props;
  const num = parseInt(propNum);
  if (!num) return null;
  return (
    <>
      <Background col={goodColorPairs[num - 14][0]}>
        <Isolate>
          <Noise />
          <Overlay col={goodColorPairs[num - 14][1]} />
        </Isolate>
        <Invisible>{props.children}</Invisible>
      </Background>
      <ShiftUp>{props.children}</ShiftUp>
    </>
  );
};

export default NoiseBackground;

const Noise = styled.div`
  height: 100%;
  background: conic-gradient(from 325deg at 12% -10%, rgba(255, 255, 255, 0), black),
    url(/static/noise.svg);
  filter: contrast(170%) brightness(905%);
  @media not all and (min-resolution: 0.001dpcm) {
    @media {
      background: conic-gradient(from 218deg at -60% -34%, rgba(255, 255, 255, 0), black),
        url(/static/noise.svg);
      filter: contrast(320%) brightness(485%);
    }
  }
`;

const Background = styled.div`
  position: relative;
  background-color: ${(props) => (props.col ? props.col : '#5a4abc')};
  padding-bottom: 16px;
`;

const Isolate = styled.div`
  position: absolute;
  mix-blend-mode: color-dodge;
  isolation: isolate;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: relative;
  top: -100%;
  background-color: ${(props) => (props.col ? props.col : 'blue')};
  opacity: 0.85;
  mix-blend-mode: exclusion;
  width: 100%;
  height: 100%;
`;

const ShiftUp = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  background-color: transparent;
`;

const Invisible = styled.div`
  visibility: hidden;
`;
