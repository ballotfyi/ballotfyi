// import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Space } from 'components/util';
import styled from 'styled-components';
import FillRestWithLine from 'components/FillRestWithLine';

/*
usage

{

	component: SectionTitleBlock,
	data: {
		title:"title about something",
		subtitle: <span>Another subtitle</span>,
		nColWidth: 6,
		img: prevPropImg, //optional
		align: "right", //optional
	}
},
*/

const TitleBar = (props) => {
  const { img, title, subtitle, align, paddingTop, nColWidth } = props.data;
  const isReversed = align === 'right';
  return (
    <Row>
      <Col
        off={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3, xxl: 3 }}
        span={{
          xs: 18,
          sm: nColWidth || 16,
          md: nColWidth || 13,
          lg: nColWidth || 11,
          xl: nColWidth || 10,
          xxl: nColWidth || 9,
        }}
      >
        <Space h={paddingTop || 70} xsHeight={35} />
        <FillRestWithLine align={align}>
          {img && !isReversed && <Img src={img} isReversed={isReversed} alt="title image" />}
          <SectionTitle>{title}</SectionTitle>
          {img && isReversed && <Img src={img} isReversed={isReversed} alt="title image" />}
        </FillRestWithLine>
        {subtitle && <SectionSubtitle align={align}>{subtitle}</SectionSubtitle>}
      </Col>
    </Row>
  );
};

TitleBar.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    paddingTop: PropTypes.number,
    nColWidth: PropTypes.number,
    img: PropTypes.string,
    align: PropTypes.string,
  }),
};

export default TitleBar;

const SectionTitle = styled.h2`
  display: inline;
  text-transform: none;
  margin: 20px 0 3px 0;
`;
const SectionSubtitle = styled.div`
  font-style: italic;
  font-size: 14px;
  text-align: ${(props) => props.align};
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Img = styled.img`
  display: inline;
  width: 32px;
  margin-right: ${(props) => (props.isReversed ? 0 : 10)}px;
  margin-left: ${(props) => (props.isReversed ? 10 : 0)}px;
  transform: rotate(${(props) => (props.isReversed ? -13 : 13)}deg);
  @media screen and (max-width: 768px) {
    display: block;
    margin: 0 auto;
  }
`;
