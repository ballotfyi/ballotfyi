import styled from 'styled-components';
// import Image from 'components/Image';
import Link from 'next/link';
// import { Row, Col, Space } from 'components/util';
import { propColors } from 'components/attributes';

const IntroPropSections = (props) => {
  const sectionsRendered = props.sections.map((section) => {
    const { propNum, title, description } = section;
    const firstDigit = propNum.toString().substring(0, 1);
    const secondDigit = propNum.toString().substring(1, 2);
    return (
      <PropSection key={propNum} id={`#prop-${propNum}-intro`}>
        <FirstDigit>{firstDigit}</FirstDigit>
        <SecondDigit>{secondDigit}</SecondDigit>
        <Link href={`/prop-${propNum}`} passHref>
          <InnerContainer>
            <Isolate>
              <Noise propNum={parseInt(propNum)} />
              <Overlay propNum={propNum} />
              <Overlay2 propNum={propNum} />
            </Isolate>
            <PropBody>
              {/* <ImageContainer>
                <Image
                  alt={`prop ${propNum}`}
                  srcset={[
                    { url: `./static/props/prop-${propNum}.png`, width: 310 },
                    { url: `./static/props/prop-${propNum}.webp`, width: 310 },
                    { url: `./static/props/prop-${propNum}@2x.png`, width: 620 },
                    { url: `./static/props/prop-${propNum}@2x.webp`, width: 620 },
                  ]}
                  width={1}
                  height={1}
                />
              </ImageContainer> */}
              <PropTitle>{title}</PropTitle>
            </PropBody>
          </InnerContainer>
        </Link>
        <Description>
          {description}
          <Link href={`/prop-${propNum}`} passHref>
            <MoreButton>
              Read more{' '}
              <span role="img" aria-label="arrow">
                →
              </span>
            </MoreButton>
          </Link>
        </Description>
      </PropSection>
    );
  });
  return sectionsRendered;
};
{
  /* <Row>
  <Col
    off={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 3, xxl: 3 }}
    span={{ xs: 20, sm: 20, md: 9, lg: 9, xl: 8, xxl: 8 }}
  >
  </Col>
  <Col
    off={{ xs: 3, sm: 3, md: 2, lg: 2, xl: 1, xxl: 1 }}
    span={{ xs: 20, sm: 20, md: 9, lg: 9, xl: 10, xxl: 10 }}
  >
    <Description>{description}</Description>
  </Col>
</Row> */
}

export default IntroPropSections;

const PropSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
`;

const InnerContainer = styled.a`
  display: block;
  position: relative;
  height: 60vw;
  width: 90vw;
  @media screen and (min-width: 576px) {
    height: 60vw;
    width: 90vw;
  }
  @media screen and (min-width: 768px) {
    height: 450px;
    width: 50%;
  }
`;

const Noise = styled.div`
  height: 100%;
  background: conic-gradient(
      from ${(props) => (props.propNum ? 325 + (props.propNum - 14) * 10 : 325)}deg at
        ${(props) => (props.propNum ? 12 + (props.propNum - 14) * 7 : 12)}% -10%,
      rgba(255, 255, 255, 0),
      black
    ),
    url(/static/noise.svg);
  filter: contrast(170%) brightness(905%);
  @media not all and (min-resolution: 0.001dpcm) {
    @media {
      background: conic-gradient(from 232deg at -60% -34%, rgba(255, 255, 255, 0), black),
        url(/static/noise.svg);
      filter: contrast(320%) brightness(485%);
    }
  }
`;

const Isolate = styled.div`
  isolation: isolate;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  box-shadow: 0px 30px 60px -12px rgba(50, 50, 93, 0.15), 0px 18px 36px -18px rgba(0, 0, 0, 0.22);
  border-radius: 3px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    ${(props) => (props.propNum ? propColors(props.propNum) : 'purple')},
    ${(props) => (props.propNum ? propColors(props.propNum + 1) : 'purple')}
  );
  box-shadow: 0px 30px 60px -12px rgba(50, 50, 93, 0.15), 0px 18px 36px -18px rgba(0, 0, 0, 0.22);
  mix-blend-mode: lighten;
`;

const Overlay2 = styled.div`
  position: absolute;
  top: -10vw;
  left: 5vw;
  width: 80vw;
  height: 80vw;
  border-radius: 250px;
  background-color: #333;
  mix-blend-mode: hue;
  @media screen and (min-width: 576px) {
    left: calc(50% - 150px);
    top: calc(50% - 150px);
    width: 300px;
    height: 300px;
  }
  @media screen and (min-width: 768px) {
    left: calc(50% - 200px);
    top: calc(50% - 200px);
    width: 400px;
    height: 400px;
  }
  @media screen and (min-width: 992px) {
    left: calc(50% - 250px);
    top: calc(50% - 250px);
    width: 500px;
    height: 500px;
  }
`;
// background-color: ${(props) => (props.propNum ? propColors(props.propNum) : 'purple')};

const Digit = styled.div`
  position: absolute;
  font-size: 120px;
  font-family: Inter, InterPre, Helvetica, sans-serif;
  font-weight: 750;
  color: rgba(255, 255, 255, 0.7);
  user-select: none;
  z-index: 10;
  @media screen and (min-width: 576px) {
    font-size: 140px;
  }
  @media screen and (min-width: 768px) {
    font-size: 200px;
  }
  @media screen and (min-width: 992px) {
    font-size: 230px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 290px;
  }
`;

const FirstDigit = styled(Digit)`
  top: 38%;
  left: 16px;
  @media screen and (max-width: 767px) {
    left: 38%;
    top: 2%;
  }
`;

const SecondDigit = styled(Digit)`
  top: 52%;
  left: calc(16px + 6%);
  @media screen and (max-width: 767px) {
    top: 14%;
    left: calc(16px + 41%);
  }
`;

const Description = styled.div`
  position: absolute;
  right: 20px;
  font-family: Inter, serif;
  font-size: 0.875em;
  line-height: calc(1ex / 0.39);
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const PropTitle = styled.h2`
  font-family: 'ITC Avant Garde', Inter, Helvetica, sans-serif;
  margin-top: 16px;
  margin-bottom: 16px;
  color: #333;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
`;

const PropBody = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// filter: drop-shadow(3px 3px 0 white) drop-shadow(12px 12px 0 rgba(0, 0, 0, 0.15))
//   drop-shadow(-20px 16px 2px rgba(0, 0, 0, 0.05));
// const ImageContainer = styled.div`
//   display: none;
//   width: 300px;
//   user-select: none;

//   @media screen and (max-width: 767px) {
//     margin-left: auto;
//     margin-right: auto;
//     width: 250px;
//     top: -120px;
//     margin-bottom: -120px;
//   }
//   @media screen and (max-width: 375px) {
//     width: 160px;
//     top: -100px;
//     margin-bottom: -120px;
//   }
// `;
// @media not all and (hover: none) {
//   &:hover {
//     transform: translate(0, -5px) scale(1.02);
//     filter: drop-shadow(3px 3px 0 white) drop-shadow(14px 15px 0px rgba(0, 0, 0, 0.1))
//       drop-shadow(-23px 19px 3px rgba(0, 0, 0, 0.03));
//   }
//   &:active {
//     transition-duration: 200ms;
//     transform: translate(0, 2px);
//     filter: drop-shadow(3px 3px 0 white) drop-shadow(8px 3px 0px rgba(0, 0, 0, 0.2))
//       drop-shadow(-4px 6px 0 rgba(0, 0, 0, 0.1));
//   }
// }

const MoreButton = styled.a`
  display: block;
  font-family: Inter, InterPre, Helvetica, sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.095em;
  margin-top: 30px;
  text-decoration: none;
  color: blue;
  @media screen and (max-width: 375px) {
    margin-top: 16px;
    font-size: 12px;
  }
  @media not all and (hover: none) {
    &:hover {
      text-decoration: underline;
    }
  }
`;
