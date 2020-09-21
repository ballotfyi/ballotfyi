// import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col, Space } from 'components/util';
import FillRestWithLine from 'components/FillRestWithLine';
import Acronym from 'components/Acronym';
import Citation from 'components/Citation';
import JsxParser from 'react-jsx-parser';
/*
A block of text
takes a title and body of text

usage in data.js file:
{

	component: TextWithTitle,
	data: {
		title: "",
		body: ""
	},
},

*/

const TextWithTitleBlock = (props) => {
  const { title, subtitle, markup } = props.data;
  // const nWidth = nColWidth || 6; // default hack
  // const offset = Math.floor((12 - nWidth) / 2);

  return (
    <Row>
      <Col
        off={{ xs: 3, sm: 3, md: 2, lg: 3, xl: 3, xxl: 3 }}
        span={{ xs: 18, sm: 16, md: 13, lg: 11, xl: 10, xxl: 9 }}
      >
        <Space h={40} />
        {title && (
          <>
            <FillRestWithLine>
              <Title>{title}</Title>
            </FillRestWithLine>
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
          </>
        )}
        <Text>
          <JsxParser components={{ Acronym, Citation }} jsx={`${markup}`} showWarnings={true} />
        </Text>
      </Col>
    </Row>
  );
};

TextWithTitleBlock.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    body: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    nColWidth: PropTypes.number,
  }),
};

export default TextWithTitleBlock;

const Title = styled.h2`
  display: inline-block;
  color: #333;
  margin: 20px 0 3px 0;
  text-transform: none;
`;
const Subtitle = styled.div`
  font-style: italic;
  font-size: 14px;
`;

const Text = styled.div`
  margin-top: 10px;
`;
