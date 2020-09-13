import React from 'react';
import styled from 'styled-components';

const CitationCard = (props) => {
  const { publication, headline, quote, link, noLink } = props;
  return (
    <Card>
      <CardLabel>Source</CardLabel>
      <SourcePublication>{publication}</SourcePublication>
      <SourceHeadline>{headline}</SourceHeadline>
      <SourceBody>
        <Quotes>&ldquo;</Quotes>&nbsp;&nbsp;&nbsp;{quote}
        <Quotes>&rdquo;</Quotes>
      </SourceBody>
      <LinkBar>
        {!noLink && (
          <span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={link}
              style={{ textDecoration: 'none' }}
            >
              <Button>
                <LinkOutStyle>
                  <LinkOutIcon />
                </LinkOutStyle>
                Read more
              </Button>
            </a>
          </span>
        )}
      </LinkBar>
    </Card>
  );
};

const LinkOutIcon = (props) => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M34.3 71.8c-1.57 1.56-1.36 3.84.5 5.04 0 0-1.06-.6.13.07a30 30 0 1 0-11.35-11.32l.04.07a3.14 3.14 0 0 0 5.04.5l17.73-17.73c.4-.4.26-.7-.3-.7 0 0-4.57 0-6.23.02-5.38 0-5.36-7.98-.04-8l17.23.05c1.93 0 3.5 1.57 3.53 3.5l.11 17.33c0 5.33-8 5.34-7.98.02l.02-6.29c0-.55-.32-.68-.7-.3z"
      fill={props.color || '#323232'}
      fillRule="evenodd"
    />
  </svg>
);

export default CitationCard;

const Card = styled.span`
  font-family: Inter, Helvetica, sans-serif;
  box-sizing: border-box;
  display: block;
  padding: 10px;
  background-color: white;
  color: #333;
  border: 2px solid #333;
  border-radius: 2px;
  width: 100%;
`;

const CardLabel = styled.span`
  display: block;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
  color: #333;
`;

const SourcePublication = styled.span`
  display: block;
  font-size: 14px;
  font-weight: normal;
  margin-top: 10px;
  line-height: 14px;
  color: #333;
  margin-top: 12px;
  text-align: left;
`;

const SourceHeadline = styled.span`
  display: inline-block;
  text-transform: none;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  margin-top: 4px;
  text-align: left;
`;

const SourceBody = styled.span`
	display: block;
	text-transform: none;
	margin-top: 12px;
	font-size: 12px;
	font-weight: normal
	text-align: left;
	line-height: 16px;
`;

const LinkBar = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 12px;
  margin-bottom: 12px;
  height: auto;
  width: 100%;
`;

const Quotes = styled.span`
	position: absolute;
	font-family: Georgia, serif;
	color: black;
	font-size 14pt;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-weight: bold;
  border: 2px solid #333;
  font-size: 12px;
  color: #333;
  text-align: center;
  padding: 6px 9px 6px 5px;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;

  @media not all and (hover: none) {
    &:hover {
      background-color: #ffd988;
      text-decoration: underline;
      outline: none;
    }
  }
`;

const LinkOutStyle = styled.div`
  display: inline-block;
  width: 20px;
  transform: translateY(3px);
`;
