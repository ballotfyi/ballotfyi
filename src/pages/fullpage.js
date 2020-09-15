// import {useState} from 'react'
import TopHat from 'components/TopHat';
import ReactFullpage from "@fullpage/react-fullpage";
import Footer from 'components/Footer';
import styled from 'styled-components';
import { propColors } from 'components/attributes';
import PropNav from 'components/PropNav'
import { 
  // Space, 
  // LinkOut, 
  Row,
  Col 
} from 'components/util';

const sections = [
  {
    propNum: "15",
    title: 'Prop 15 issues $4B for housing programs',
    description: "Michael Caputo, the assistant secretary of health for public affairs, told a Facebook audience without evidence that left-wing hit squads were being trained for insurrection, and he accused C.D.C. scientists of “sedition.”",
  },
  {
    propNum: "16",
    title: 'Prop 16 gives old folks a property tax discount when they move',
    description: "Michael Caputo, the assistant secretary of health for public affairs, told a Facebook audience without evidence that left-wing hit squads were being trained for insurrection, and he accused C.D.C. scientists of “sedition.”",
  },
  {
    propNum: '18',
    title: `Prop 18 limits dialysis clinics' revenue`,
    description: "Michael Caputo, the assistant secretary of health for public affairs, told a Facebook audience without evidence that left-wing hit squads were being trained for insurrection, and he accused C.D.C. scientists of “sedition.”",

  },
  {
    propNum: '20',
    title: 'Would have split CA into three states',
    description: "Michael Caputo, the assistant secretary of health for public affairs, told a Facebook audience without evidence that left-wing hit squads were being trained for insurrection, and he accused C.D.C. scientists of “sedition.”",
  },
  {
    propNum: '22',
    title: 'Sets minimum space requirements for farm animals',
    description: "Michael Caputo, the assistant secretary of health for public affairs, told a Facebook audience without evidence that left-wing hit squads were being trained for insurrection, and he accused C.D.C. scientists of “sedition.”",
  }
];

const Sections = React.memo(() => {
  const sectionsRendered = sections.map( (section) => {
    const {propNum, title, description} = section;
    return(
      <div key={propNum} className="section">
        <Top>
          <Isolate>
            <Noise/>
            <Overlay propNum={propNum}/>
            <Overlay2 propNum={propNum}/>
          </Isolate>
          <FirstDigit>{propNum.substring(0,1)}</FirstDigit>
          <SecondDigit>{propNum.substring(1,2)}</SecondDigit>
          <Row style={{position: 'absolute', width:'100%'}}>
            <Col
              off={{ xs: 1, sm: 2, md: 13, lg: 13, xl: 12, xxl: 12 }}
              span={{ xs: 22, sm: 20, md: 10, lg: 10, xl: 10, xxl: 10 }}
              >
              <Title>{title}</Title>
              <Bar/>
            </Col>
          </Row>
        </Top>
        <Col
          off={{ xs: 1, sm: 2, md: 13, lg: 13, xl: 12, xxl: 12 }}
          span={{ xs: 22, sm: 20, md: 9, lg: 9, xl: 10, xxl: 10 }}
        >
          <Description>
            {description}
          </Description>
        </Col>
      </div>
    );
  })

  return sectionsRendered;
})

const FullPageTest = () => {
  const seq = Array.from(Array(12).keys());
  const anchors = seq.map( n => (`prop-${n+14}-intro`))

  return (
    <>
      <SeparateLayer>
        <TopHat/>
      </SeparateLayer>
      <ReactFullpage
        licenseKey='3CB1143B-BE7D4092-876D11C1-7FBD29BB'
        menu='#propNav'
        anchors={anchors}
        verticalCentered={false}
        scrollingSpeed={540}
        touchSensitivity={1}
        render={(comp) => {
          return(
            <>
              <PropNav comp={comp}/>
              <ReactFullpage.Wrapper>
                <Sections />
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      />
      <Footer/>
    </>
  )
}

export default FullPageTest;

const SeparateLayer = styled.div`
  width: 100%;
  position: absolute;
  z-index: 10;
`;

const Noise = styled.div`
  height: 100%;
  background: conic-gradient(from 325deg at 0% -4%, rgba(255, 255, 255, 0), black),
    url(/static/noise.svg);
  filter: contrast(170%) brightness(905%);
  @media not all and (min-resolution: 0.001dpcm) {
    @media {
      background: conic-gradient(from 232deg at -60% -34%, rgba(255, 255, 255, 0), black),
        url(/static/noise.svg);
      filter: contrast(320%) brightness(485%)
    }
  }
`;

const Top = styled.div`
  position: relative;
  height: 63%;
`;

const Isolate = styled.div`
  isolation: isolate;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: calc(100% - 10px);
  background: linear-gradient( 90deg, ${props => props.propNum ? propColors[props.propNum] : 'purple'}, ${props => props.propNum ? propColors[`${parseInt(props.propNum-1)}`] : 'purple'});
  box-shadow: 4px 6px 40px 30px rgba(0, 0, 0, 0.06);
  mix-blend-mode: lighten;
`;
const Overlay2 = styled.div`
  position: absolute;
  top: calc(100% - 10px);
  width: 100%;
  height: 10px;
  background-color: ${props => props.propNum ? propColors[props.propNum] : 'purple'};
  mix-blend-mode: exclusion;
`;

const Digit = styled.div`
  position: absolute;
  font-size: 290px;
  font-family: Inter, InterPre, Helvetica, sans-serif;
  font-weight: 750;
  color: rgba(255,255,255,0.35);
`;

const FirstDigit = styled(Digit)`
  top: 38%;
  left: 16px;
`;

const SecondDigit = styled(Digit)`
  top: 52%;
  left: calc(16px + 6%);
`;

const Title = styled.h2`
  font-size: 52px;
  line-height: 59px;
  font-family: 'ITC Avant Garde', Inter, Helvetica, sans-serif;
  color: #333;
`;

const Description = styled.div`
  display: inline-block;
  margin-top: 30px;
`;

const Bar = styled.div`
  height: 20px;
  background-color: rgba(255,255,255,0.3);
  border-radius: 10px;
`;
