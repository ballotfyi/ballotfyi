import React from 'react';
import styled from 'styled-components';
import { LinkOutIcon, CloseIcon } from 'components/icons';

const CitationCard = (props) => {
  const { publication, headline, quote, url, noLink, toggleVisibility } = props;
  return (
    <Card>
      <Row>
        <CardLabel>Source</CardLabel>
        <DismissIcon name="dimiss" onClick={() => toggleVisibility(false)} on={toggleVisibility}>
          <CloseIcon color="blue" />
        </DismissIcon>
      </Row>
      <SourcePublication>{publication}</SourcePublication>
      <SourceHeadline>{headline}</SourceHeadline>
      {quote && quote !== '' && (
        <SourceBody>
          <Quotes>&ldquo;</Quotes>
          {quote}
          <Quotes>&rdquo;</Quotes>
        </SourceBody>
      )}
      <ActionRow>
        <Dismiss name="dimiss" onClick={() => toggleVisibility(false)} on={toggleVisibility}>
          Dismiss
        </Dismiss>
        {!noLink && (
          <ReadMoreLink target="_blank" rel="noopener noreferrer" href={url}>
            <LinkOutStyle>
              <LinkOutIcon />
            </LinkOutStyle>
            Read more
          </ReadMoreLink>
        )}
      </ActionRow>
    </Card>
  );
};

export default CitationCard;

const Card = styled.span`
  display: block;
  font-family: Inter, Helvetica, sans-serif;
  box-sizing: border-box;
  padding: 10px;
  color: #333;
  width: 100%;
  border-top: 3px solid blue;
  background-color: white;
`;

const Row = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardLabel = styled.span`
  display: block;
  font-weight: 700;
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
`;

const SourceHeadline = styled.span`
  display: inline-block;
  text-transform: none;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  margin-top: 4px;
`;

const SourceBody = styled.span`
  display: block;
  text-transform: none;
  margin-top: 12px;
  font-size: 12px;
  line-height: 17px;
`;

const Quotes = styled.span`
	font-family: Georgia, serif;
  font-size 13pt;
`;

const ActionRow = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-weight: 700;
  font-size: 12px;
  margin-top: 10px;
  color: blue;
  @media screen and (max-width: 767px) {
    justify-content: flex-end;
  }
`;

const Dismiss = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  text-decoration: underline;
  @media screen and (max-width: 767px) {
    display: block;
  }
`;

const ReadMoreLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6px 24px 6px 5px;
  cursor: pointer;
  margin-left: 10px;
  @media not all and (hover: none) {
    &:hover {
      text-decoration: underline;
    }
  }
  &:focus {
    text-decoration: underline;
  }
`;

const LinkOutStyle = styled.span`
  width: 20px;
  height: 20px;
`;

const DismissIcon = styled.button`
  display: inline;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  height: 20px;
  width: 25px;
`;
