import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, ArticleCol } from 'components/util';
import styled from 'styled-components';
import { LinkOutIcon } from 'components/icons';
/*
usage

{

	component: VerticalSummaryListBlock,
	data: {
		listNItems: 3, //optional
		buttonText: "View more", //optional
		stories: [
			{
				title: "Defied state law and issued same-sex marriage licenses (2004)",
				description: <span>While it was still illegal in California in 2004, Gavin, as Mayor of SF, ordered his County Clerk to issue 4K same-sex marriage licenses.</span>,
			},
			{
				title: <span>Passed universal health care in SF (2007)</span>,
				description: "As mayor, Gavin implemented Healthy SF, a program that provided health care to all residents including undocumented immigrants",
			},
		],
	}
},
*/

const Snippet = (props) => {
  const { title, description, links } = props.data;
  let expandedLinks = null;
  if (links) {
    expandedLinks = links.map((link, i) => {
      return (
        <React.Fragment key={i}>
          <LinkOutStyle>
            <LinkOutIcon color="red" />
          </LinkOutStyle>
          <StoryLink href={link.url} target="_blank" rel="noreferred noopener">
            {link.label}
          </StoryLink>
        </React.Fragment>
      );
    });
  }

  return (
    <Container>
      <TitleContainer>
        <h3>{title}</h3>
        {links && <LinkContainer>{expandedLinks}</LinkContainer>}
      </TitleContainer>
      {description}
    </Container>
  );
};

const VerticalSummaryListBlock = (props) => {
  const [expanded, setExpanded] = useState(false);

  const { stories, listNItems, buttonText } = props.data;
  const nItems = listNItems || 3;
  let snippets = [];
  let restOfSnippets = [];
  for (let i = 0; i < stories.length; i++) {
    if (i < nItems) {
      snippets.push(<Snippet key={i} data={stories[i]} />);
    } else {
      restOfSnippets.push(<Snippet key={i} data={stories[i]} />);
    }
  }
  if (snippets.length === 0) snippets = null;
  if (restOfSnippets.length === 0) restOfSnippets = null;
  const moreButton =
    !expanded && restOfSnippets.length > 0 ? (
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
  margin-top: 40px;
`;

const TitleContainer = styled.div`
  margin-bottom: 10px;
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

const ExpandButton = styled.button`
  margin: 40px auto 0 auto;
  padding: 10px 20px;
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
      background-color: orange;
    }
  }
`;

const LinkContainer = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`;
const StoryLink = styled.a`
  display: block;
  font-family: Inter, InterPre, Helvetica, sans-serif;
  font-size: 12px;
  margin-right: 20px;
`;
const LinkOutStyle = styled.div`
  height: 20px;
  min-width: 20px;
  width: 20px;
  transform: translateY(2px);
`;
