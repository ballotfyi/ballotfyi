import styled from 'styled-components';
import { Col } from 'components/util';

const GradientBar = () => {
  return (
    <Col
      off={{ xs: 2, sm: 3, md: 2, lg: 2, xl: 2, xxl: 3 }}
      span={{ xs: 20, sm: 18, md: 14, lg: 14, xl: 14, xxl: 15 }}
    >
      <TopHat>
        <TopHatDot />
        <TopHatBar />
        <Name>BALLOT.FYI</Name>
      </TopHat>
    </Col>
  );
};

export default GradientBar;

const TopHat = styled.div`
  display: flex;
  padding-top: 16px;
  padding-bottom: 30px;
`;

const TopHatDot = styled.div`
  height: 20px;
  width: 20px;
  background: linear-gradient(135deg, #adaafe 16.67%, #ffb9b9 73.81%);
  margin-right: 20px;
  border-radius: 10px;
`;

const TopHatBar = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #ffb9b9 0%, rgba(129, 126, 255, 0.66) 100%);
  border-radius: 10px;
`;

const Name = styled.div`
  display: inline;
  margin-left: 16px;
  font-family: Inter, 'ITC Avant Garde', sans-serif;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.195em;
`;
