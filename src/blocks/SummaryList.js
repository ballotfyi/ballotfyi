import { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, ArticleCol } from 'components/util';
import styled from 'styled-components';

/*
usage

{

	component: SummaryListBlock,
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
			{
				title: "Was one of the first politicians to support legalizing marijuana",
				description: "Gavin supported Prop 47, in 2014, and then was the main politician arguing for Prop 64, which passed in Nov 2016.",
			},
			{
				title: "Was one of the first politicians to support legalizing marijuana",
				description: "Gavin supported Prop 47, in 2014, and then was the main politician arguing for Prop 64, which passed in Nov 2016.",
			},
			{
				title: "Was one of the first politicians to support legalizing marijuana",
				description: "Gavin supported Prop 47, in 2014, and then was the main politician arguing for Prop 64, which passed in Nov 2016.",
			},
		],
	}
},
*/

const Snippet = (props) => (
  <Container>
    <TitleContainer>
      <h3>{props.data.title}</h3>
    </TitleContainer>
    {props.data.description}
  </Container>
);

const SummaryListBlock = (props) => {
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
        {expanded && restOfSnippets}
      </ArticleCol>
    </Row>
  );
};

SummaryListBlock.propTypes = {
  data: PropTypes.shape({
    listNItems: PropTypes.number,
    buttonText: PropTypes.string,
    noBorder: PropTypes.bool,
    stories: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      })
    ),
  }),
};

export default SummaryListBlock;

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  margin-top: 3px;
  margin-right: 30px;
  text-align: right;
  min-width: 180px;
  max-width: 180px;
  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: unset;
    border: none;
    margin: 0 0 10px 0;
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
