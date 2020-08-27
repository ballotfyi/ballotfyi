import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';

const Header = () => {
  return (
    <Row style={{marginLeft: 0, marginRight: 0}}>
      <Col
        offset={{xs: 1, lg: 1, xl: 3, xxl: 5}}
        xs={18}
        lg={13}
        xl={10}
        xxl={14}
      >
        <TopHat>
          <TopHatDot />
          <TopHatBar />
        </TopHat>
      </Col>
    </Row>
  );
};

export default Header;

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
