import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, ArticleCol } from 'components/util';
import styled from 'styled-components';
import { LinkOutIcon } from 'components/icons';
import JsxParser from 'components/JsxParser';
import { useAmp } from 'next/amp';
import { useRouter } from 'next/router';

const Snippet = (props) => {
  const [expanded, setExpanded] = useState(false);
  const isAmp = useAmp();
  const { asPath } = useRouter();
  const propNum = parseInt(asPath.split('-')[1]);
  const { title, description, links, buttonText, expandedContent, index } = props.data;
  const textOnButton = buttonText || 'View more';
  let renderedLinks = null;
  if (links && links.length > 0 && links[0].url) {
    renderedLinks = links.map((link, i) => {
      return (
        <LinkAndIcon key={i}>
          <LinkOutStyle>
            <LinkOutIcon />
          </LinkOutStyle>
          <StoryLink href={link.url} target="_blank" rel="noreferred noopener">
            {link.label}
          </StoryLink>
        </LinkAndIcon>
      );
    });
  }
  if (!isAmp) {
    const buttonOrContent = expanded ? (
      <JsxParser jsx={`${expandedContent.markup}`} />
    ) : expandedContent ? (
      <ExpandButton name="more" onClick={() => setExpanded(true)}>
        {textOnButton}
      </ExpandButton>
    ) : null;
    return (
      <Container>
        <div>
          <h3>{title}</h3>
          {links && <LinkContainer>{renderedLinks}</LinkContainer>}
        </div>
        <JsxParser jsx={`${description.markup}`} />
        {buttonOrContent}
      </Container>
    );
  } else {
    const btnKey = `prop${propNum}snipBtn${index}`;
    const textKey = `prop${propNum}snipText${index}`;
    return (
      <Container>
        <div>
          <h3>{title}</h3>
          {links && <LinkContainer>{renderedLinks}</LinkContainer>}
        </div>
        <JsxParser jsx={`${description.markup}`} />
        <ExpandButton id={btnKey} name="more" on={`tap:${textKey}.show`}>
          {textOnButton}
        </ExpandButton>
        <div id={textKey} hidden={isAmp}>
          <JsxParser jsx={`${expandedContent.markup}`} />
        </div>
      </Container>
    );
  }
};

const VerticalSummaryListBlock = (props) => {
  const [expanded, setExpanded] = useState(false);

  const { stories, listNItems, buttonText } = props.data;
  const nItems = listNItems || 3;
  let snippets = [];
  let restOfSnippets = [];
  for (let i = 0; i < stories.length; i++) {
    if (i < nItems) {
      snippets.push(<Snippet key={i} data={{ ...stories[i], index: i }} />);
    } else {
      restOfSnippets.push(<Snippet key={i} data={{ ...stories[i], index: i }} />);
    }
  }
  if (snippets.length === 0) snippets = null;
  if (restOfSnippets.length === 0) restOfSnippets = null;
  const moreButton =
    !expanded && restOfSnippets && restOfSnippets.length > 0 ? (
      <ExpandButton name="more" onClick={() => setExpanded(true)}>
        {buttonText || 'View more'}
      </ExpandButton>
    ) : null;

  return (
    <Row>
      <ArticleCol>
        {snippets}
        {moreButton}
        {expanded && <div>{restOfSnippets}</div>}
      </ArticleCol>
    </Row>
  );
};

VerticalSummaryListBlock.propTypes = {
  data: PropTypes.shape({
    listNItems: PropTypes.number,
    buttonText: PropTypes.string,
    stories: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      })
    ),
  }),
};

export default VerticalSummaryListBlock;

const Container = styled.div`
  margin-bottom: 50px;
`;


const ExpandButton = styled.button`
  margin: 15px 0 15px 0;
  padding: 9px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 0;
  border: none;
  cursor: pointer;
  color: white;
  font-family: Inter, InterPre, Helvetica, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.095rem;
  @media not all and (hover: none) {
    &:hover {
      background-color: blue;
    }
  }
`;

const LinkContainer = styled.div`
  display: flex;
  margin-bottom: -5px;
`;
const StoryLink = styled.a`
  display: block;
  font-family: Inter, InterPre, Helvetica, sans-serif;
  font-size: 12px;
  margin-right: 20px;
  @media screen and (max-width: 767px) {
    line-height: 16px;
  }
`;
const LinkOutStyle = styled.div`
  height: 20px;
  min-width: 20px;
  width: 20px;
`;

const LinkAndIcon = styled.div`
  display: flex;
  align-items: center;
`;
