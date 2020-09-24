import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'components/util';
import { FromThem, FromMe, Clear, Section, FromThemEmoji } from './ChatStyles';
import JsxParser from 'components/JsxParser';

/*
an iMessage conversation block

example usage for data.js
{
	
	component: ChatBlock,
	data: {
		messages: [
			{
				from: 'me',
				body: "Man, Prop 72. I'm just gonna watch youtube with this extra time."
			},
			{
				from: 'them',
				body: "Hi Jimmy, I'm Taryn, a volunteer with Gavin Newsom's campaign for governor. Have you decided who you'll be supporting on June 5th?"
			},
			{
				from: 'me',
				body: "For the love of God, stop texting me"
			},
			{
				from: 'them',
				body: "Great question, Jimmy! You can learn more at gavinnewsom.com."
			},
		]
	},
},
*/

const ChatBlock = (props) => {
  const { messages } = props.data;
  let lastSender = null;
  const conversation = messages.map((message, i) => {
    let conditionalClear = null;
    let msg = null;
    if (lastSender !== message.from) {
      conditionalClear = <Clear />;
    }
    lastSender = message.from;

    switch (message.from) {
      case 'them':
        msg = (
          <FromThem>
            <JsxParser jsx={message.body.markup} />
          </FromThem>
        );
        break;
      case 'me':
        msg = (
          <FromMe>
            <JsxParser jsx={message.body.markup} />
          </FromMe>
        );
        break;
      case 'me-no-bg':
        msg = (
          <FromMe style={{ background: 'none' }}>
            <JsxParser jsx={message.body.markup} />
          </FromMe>
        );
        break;
      case 'them-no-bg':
        msg = (
          <FromThemEmoji>
            <JsxParser jsx={message.body.markup} />
          </FromThemEmoji>
        );
        break;
      default:
        break;
    }
    return (
      <React.Fragment key={i}>
        {conditionalClear}
        {msg}
      </React.Fragment>
    );
  });
  return (
    <Row>
      <Col
        off={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3, xxl: 3 }}
        span={{ xs: 18, sm: 16, md: 13, lg: 11, xl: 10, xxl: 9 }}
      >
        <Section>{conversation}</Section>
      </Col>
    </Row>
  );
};

ChatBlock.propTypes = {
  data: PropTypes.shape({
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        from: PropTypes.string.isRequired,
        body: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
      })
    ),
  }).isRequired,
};

export default ChatBlock;
