import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, ArticleCol, mapResultToColor } from 'components/util';
import JsxParser from 'components/JsxParser';

/*

usage in data.js file:
{

	component: ResultBlock,
	data: {
		title: "",
		result:"",
		text: ""
	},
},

*/

const ResultBlock = (props) => {
  const { title, text, result } = props.data;

  return (
    <Row>
      <ArticleCol>
        <Container color={mapResultToColor[result]}>
          <TitlePos>
            <Title color={mapResultToColor[result]}>{title}</Title>
          </TitlePos>
          <JsxParser jsx={`${text.markup}`} />
        </Container>
      </ArticleCol>
    </Row>
  );
};

ResultBlock.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    result: PropTypes.string,
    text: PropTypes.string.isRequired,
  }),
};

export default ResultBlock;

const TitlePos = styled.div`
  position: relative;
  top: -72px;
`;

const Title = styled.h2`
  display: block;
  font-size: 16px;
  position: absolute;
  color: ${(props) => (props.color ? props.color : '#333')};
  background: #fff;
  padding: 0 20px;
  text-transform: none;
`;

const Container = styled.div`
  margin-top: 30px;
  box-sizing: border-box;
  padding: 20px 30px 30px 30px;
  border-radius: 8px;
  border: 4px solid ${(props) => (props.color ? props.color : '#323232')};
`;
