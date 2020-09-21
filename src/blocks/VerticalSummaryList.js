import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'components/util';
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
  const [expanded, setExpanded] = useState(false);

  const { title, description, links, buttonText, expandedContent } = props.data;
  const textOnButton = buttonText || 'View more';
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
        <StyledH3>{title}</StyledH3>
        {links && <LinkContainer>{expandedLinks}</LinkContainer>}
      </TitleContainer>
      {description}
      {!expanded && expandedContent && (
        <ButtonContainer>
          <ExpandButton onClick={() => setExpanded(true)}>
            <ExpandButtonLabel>{textOnButton}</ExpandButtonLabel>
          </ExpandButton>
        </ButtonContainer>
      )}
      {expanded && <div>{expandedContent}</div>}
    </Container>
  );
};

const VerticalSummaryListBlock = (props) => {
  const { stories } = props.data;
  const snippets = stories.map((story, i) => {
    return <Snippet key={i} data={story} />;
  });

  return (
    <div>
      <Row>
        <Col xsOffset={1} xs={10} smOffset={2} sm={8} mdOffset={3} md={6} lgOffset={3} lg={6}>
          {snippets}
        </Col>
      </Row>
    </div>
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ExpandButton = styled.div`
  margin-top: 20px;
  padding: 5px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 4px;
  @media not all and (hover: none) {
    &:hover {
      background-color: orange;
      cursor: pointer;
    }
  }
`;

const StyledH3 = styled.h3`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 3px;
`;
export const ExpandButtonLabel = styled.h2`
  font-size: 14px;
  text-align: center;
  color: white;
`;
const LinkContainer = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`;
const StoryLink = styled.a`
  display: block;
  font-family: ${(props) => props.theme.fonts.helvetica};
  font-size: 12px;
  margin-right: 20px;
`;
const LinkOutStyle = styled.div`
  height: 20px;
  min-width: 20px;
  width: 20px;
  transform: translateY(2px);
`;
