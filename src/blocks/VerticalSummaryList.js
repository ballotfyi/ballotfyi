import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, ArticleCol } from 'components/util';
import styled from 'styled-components';
import { LinkOutIcon } from 'components/icons';
import JsxParser from 'components/JsxParser';

/*
usage

{
  component: VerticalSummaryListBlock,
  data: {
    listNItems: 3,
    stories: [
      {
        title: "Stanford study on SF rent control (2018)",
        buttonText: "What they found",
        links: [
          {
            label:"Summarized article",
            url:"https://www.brookings.edu/research/what-does-economic-evidence-tell-us-about-the-effects-of-rent-control/"
          },
          {
            label:"Research paper",
            url:"https://web.stanford.edu/~diamondr/DMQ.pdf"
          },
        ],
        description:
          <span>Researchers took advantage of a unique "quasi-experimental" situation <Citation data={Citations['12']}>where in 1994, rent control in SF was suddenly applied to small multifamily homes (SMFH) built before 1980.</Citation> The researchers compared those <Acronym data={Acronyms.SMFH}/>s to <Acronym data={Acronyms.SMFH}/>s built after 1980 (not rent controlled) and studied how renters and landlords behaved after 1994.</span>,
        expandedContent:
          <span>
            <br/>
            A few findings: (1) <Citation data={Citations['13']}>People in rent controlled <Acronym data={Acronyms.SMFH}/>s were more likely to still be living at their 1994 addresses.</Citation> (Supporting what rent control advocates say.)
            <br/><br/>
            (2) <Citation data={Citations['16']}>Rent-controlled buildings were more likely to turn into condos or Tenancy in Common (TIC) buildings, effectively reducing the number of renters in buildings that were rent controlled.</Citation> (Supporting what rent control opponents say.)
            <br/><br/>
            (3) <Citation data={Citations['14']}>In areas where surrounding rents increased rapidly, being in a rent controlled apartment actually <em>decreased</em> the likelihood that renters remained at their address.</Citation> This is because landlords, who had a large incentive to remove tenants, <Citation data={Citations['15']}>could effectively do so through <Acronym data={Acronyms.variousMeans}/>.</Citation> (This is counter to rent control's intention)
          </span>,
      },
      ...
    ]
  }
}
*/

const Snippet = (props) => {
  const [expanded, setExpanded] = useState(false);

  const { title, description, links, buttonText, expandedContent } = props.data;
  const textOnButton = buttonText || "View more"
  let renderedLinks = null;
  if (links && (links.length === 1 && links[0].url)) {
    renderedLinks = links.map((link, i) => {
      return (
        <React.Fragment key={i}>
          <LinkOutStyle>
            <LinkOutIcon/>
          </LinkOutStyle>
          <StoryLink href={link.url} target="_blank" rel="noreferred noopener">
            {link.label}
          </StoryLink>
        </React.Fragment>
      );
    });
  }
  const buttonOrContent = expanded ? 
    <JsxParser jsx={`${expandedContent.markup}`} />
    :
    (expandedContent ? 
      <ExpandButton onClick={()=>setExpanded(true)}>
        {textOnButton}
      </ExpandButton>
      :
      null);

  return (
    <Container>
      <TitleContainer>
        <h3>{title}</h3>
        {links && <LinkContainer>{renderedLinks}</LinkContainer>}
      </TitleContainer>
      <JsxParser jsx={`${description.markup}`} />
      {buttonOrContent}
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
  margin-top: 40px;
`;

const TitleContainer = styled.div`
  margin-bottom: 10px;
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

const ExpandButton = styled.button`
  margin: 23px auto 0 auto;
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
      background-color: blue;
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
  padding-top: 3px;
`;
