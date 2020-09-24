import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, ArticleCol, Space } from 'components/util';
import FillRestWithLine from 'components/FillRestWithLine';
import JsxParser from 'components/JsxParser';
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
  const { title, subtitle, body } = props.data;

  return (
    <Row>
      <ArticleCol>
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
          <JsxParser jsx={`${body.markup}`} />
        </Text>
      </ArticleCol>
    </Row>
  );
};

TextWithTitleBlock.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    body: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
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
