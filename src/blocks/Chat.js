import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'components/util';
import JsxParser from 'components/JsxParser';
import styled from 'styled-components';

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

const Section = styled.div`
  font-family: -apple-system-body, Helvetica Neue, Helvetica, 'Helvetica-bd', sans-serif;
  font-weight: bold;
  color: #fff;
  font-size: 1.063em;
  font-weight: normal;
  max-width: 360px;
  margin: 40px auto;
  & > div {
    max-width: 200px;
    word-wrap: break-word;
    margin-bottom: 10px;
    line-height: 22px;
    @media screen and (max-width: 767px) {
      max-width: 170px;
      font-size: 1em;
      line-height: calc(1ex / 0.4);
    }
  }
`;
const Clear = styled.div`
  clear: both;
`;
const FromMe = styled.div`
  position: relative;
  padding: 10px 20px;
  color: white;
  background: #0b93f6;
  border-radius: 25px;
  float: right;
  &:before {
    content: '';
    position: absolute;
    bottom: -2px;
    right: -7px;
    height: 20px;
    border-right: 20px solid #0b93f6;
    border-bottom-left-radius: 16px 14px;
    transform: translate(0, -2px);
  }
  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: -2px;
    right: -56px;
    width: 26px;
    height: 20px;
    background: white;
    border-bottom-left-radius: 10px;
    transform: translate(-30px, -2px);
  }
  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;
const FromThem = styled.div`
  position: relative;
  padding: 10px 20px;
  background: #e5e5ea;
  border-radius: 25px;
  color: black;
  float: left;
  &:before {
    content: '';
    position: absolute;
    z-index: 2;
    bottom: -2px;
    left: -7px;
    height: 20px;
    border-left: 20px solid #e5e5ea;
    border-bottom-right-radius: 16px 14px;
    transform: translate(0, -2px);
  }
  &:after {
    content: '';
    position: absolute;
    z-index: 3;
    bottom: -2px;
    left: 4px;
    width: 26px;
    height: 20px;
    background: white;
    border-bottom-right-radius: 10px;
    transform: translate(-30px, -2px);
  }
  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;
const FromThemEmoji = styled(FromThem)`
  background: none;
  &:before {
    border-left: none;
  }
`;

// const EmojiLg = styled.span`
//   font-size: 50pt;
//   line-height: 55pt;
// `;
