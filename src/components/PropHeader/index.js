import styled from 'styled-components';
import { Row, Col } from 'components/util';

const PropHeader = (props) => {
  const { title, dateModified, datePublished } = props;

  const dtModified = new Date(dateModified);
  const dtPublished = new Date(datePublished);
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  const showLastModified = dtModified > dtPublished;
  return (
    <Row>
      <Col
        off={{ xs: 3, sm: 3, md: 4, lg: 3, xl: 3, xxl: 3 }}
        span={{ xs: 18, sm: 16, md: 16, lg: 16, xl: 16, xxl: 16 }}
      >
        <h1>{title}</h1>
        <DateLine>Published: {dtPublished.toLocaleDateString('en-US', options)}</DateLine>
        {showLastModified && (
          <DateLine>Last modified: {dtModified.toLocaleDateString('en-US', options)}</DateLine>
        )}
      </Col>
    </Row>
  );
};

export default PropHeader;

const DateLine = styled.div`
  font-family: Inter, Helvetica;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0.045em;
  text-transform: uppercase;
  @media screen and (max-width: 767px) {
    font-size: 10px;
    font-weight: 400;
  }
`;
