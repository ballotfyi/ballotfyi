import PropTypes from 'prop-types';
import { Row, TitleCol } from 'components/util';
import JsxParser from 'components/JsxParser';
/*
A block of text

usage in data.js file:
{

	component: TextWithTitle,
	data: {
		body: ""
	},
},

*/

const IntroTextBlock = (props) => {
  const { body } = props.data;

  return (
    <Row>
      <TitleCol>
        <JsxParser jsx={`${body.markup}`} />
      </TitleCol>
    </Row>
  );
};

IntroTextBlock.propTypes = {
  data: PropTypes.shape({
    body: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  }),
};

export default IntroTextBlock;
