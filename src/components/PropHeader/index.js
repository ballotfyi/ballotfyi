import styled from 'styled-components';
import { Row, Col, Space } from 'components/util';

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
        span={{ xs: 20, sm: 18, md: 16, lg: 16, xl: 16, xxl: 16 }}
      >
        <Space h={10} xsHeight={15} />
        <header>
          <h1>{title}</h1>
          <DateLine>Published: {dtPublished.toLocaleDateString('en-US', options)}</DateLine>
          {showLastModified && (
            <div>
              <DateLine>Updated: {dtModified.toLocaleDateString('en-US', options)}</DateLine>
            </div>
          )}
        </header>
      </Col>
    </Row>
  );
};

export default PropHeader;

const DateLine = styled.div`
  font-family: Inter, Helvetica, sans-serif;
  font-weight: 450;
  font-size: 11px;
  line-height: calc(1ex / 0.33);
  letter-spacing: 0.045em;
  text-transform: uppercase;
  @media screen and (max-width: 767px) {
    font-size: 0.625em;
    font-weight: 400;
  }
`;
// padding: 0 20px;
// display: inline-block;
// color: white;
// border-radius: 10px;
// background-color: rgba(0,0,0,0.7);
