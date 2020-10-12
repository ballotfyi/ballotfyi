import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Space } from 'components/util';
import styled from 'styled-components';
import { LinkOutIcon, LinkOutStyle } from 'components/icons';

/*
example usage:

{

	component: LinksBlock,
	data: {
		subsections:[
			{
				subsectionTitle: "Supports Prop 72",
				links: [
					{
						text: "LA Times Editorial Board",
						url: "http://www.latimes.com/opinion/endorsements/la-ed-prop-72-endorsement-20180424-story.html",
					},
					{
						text: "SF Chronicle Editorial Board",
						url: "https://www.sfchronicle.com/opinion/editorials/article/Editorial-Chronicle-recommendations-on-Props-12849416.php",
					},
					{
						text: "Fresno Bee Editorial Board",
						url: "http://www.fresnobee.com/opinion/editorials/article210705274.html"
					},
					{
						text: "Mercury News Editorial Board",
						url: "https://www.mercurynews.com/2018/03/13/editorial-prop-72-rewards-homeowners-who-build-rainwater-capture-systems/"
					},
					{
						text: "The OC Register Editorial Board",
						url: "https://www.ocregister.com/2018/05/08/yes-on-prop-72-for-water-and-tax-relief/"
					},
				]
			},
			{
				subsectionTitle: "More analysis",
				links: [
					{
						text: "Legislative Analyst Office's summary",
						url:"http://voterguide.sos.ca.gov/propositions/72/analysis.htm"
					},
					{
						text: "KQED Science",
						url: "https://www.kqed.org/science/1924022/prop-72-encourages-homeowners-to-capture-rainwater",
					},
					{
						text: "CALMatters",
						url: "https://elections.calmatters.org/2018/california-ballot-measures/proposition-72-rainwater-capture-property-taxes/",
					},
				]
			},
		],
	}
},
*/

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const LinksChunk = (props) => {
  const { links, subsectionTitle, noEditorials } = props.data;
  const isInSupport =
    subsectionTitle.toLowerCase().includes('supports') ||
    subsectionTitle.toLowerCase().includes('yes');
  const linkArr = props.isInTopTwo ? shuffleArray(links) : links;
  const renderedLinks = linkArr.map((link, j) => {
    return link.url ? (
      <LinkWrapper key={j}>
        <LinkOutStyle>
          <LinkOutIcon />
        </LinkOutStyle>
        <ExternalLink target="_blank" rel="noopener noreferrer" href={link.url}>
          {link.publisher}
        </ExternalLink>
      </LinkWrapper>
    ) : (
      <LinkWrapper key={j}>{link.publisher}</LinkWrapper>
    );
  });
  return (
    <SectionWrapper>
      <SubsectionTitle>{subsectionTitle}</SubsectionTitle>
      {noEditorials && (
        <NoEditorials>
          [No Editorial Boards {isInSupport ? 'support' : 'oppose'} this proposition]
        </NoEditorials>
      )}
      {renderedLinks}
    </SectionWrapper>
  );
};

const LinksBlock = (props) => {
  const evenSections = props.data.subsections.map((section, i) => {
    if (i % 2 === 0) {
      return <LinksChunk isInTopTwo={i < 2} key={i} data={section} />;
    }
    return null;
  });
  //-- to make two columns
  const oddSections = props.data.subsections.map((section, i) => {
    if (i % 2 === 1) {
      return <LinksChunk isInTopTwo={i < 2} key={i} data={section} />;
    }
    return null;
  });

  return (
    <HideOnPrint>
      <Space h={30} />
      <Row>
        <Col
          off={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3, xxl: 3 }}
          span={{ xs: 18, sm: 16, md: 8, lg: 8, xl: 8, xxl: 8 }}
        >
          {evenSections}
        </Col>
        <Col
          off={{ xs: 3, sm: 3, md: 1, lg: 1, xl: 1, xxl: 1 }}
          span={{ xs: 18, sm: 16, md: 8, lg: 8, xl: 8, xxl: 8 }}
        >
          {oddSections}
        </Col>
      </Row>
      <Row>
        <Col
          off={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3, xxl: 3 }}
          span={{ xs: 18, sm: 16, md: 15, lg: 13, xl: 12, xxl: 11 }}
        >
          <Disclaimer>
            <b>Note</b>: We intentionally omit links to arguments &amp; rebuttals found in CA's
            official voter guide. We believe they exaggerate claims, are not fact-checked, and use
            ALL CAPS irresponsibly.
          </Disclaimer>
        </Col>
      </Row>
    </HideOnPrint>
  );
};

LinksBlock.propTypes = {
  data: PropTypes.shape({
    subsections: PropTypes.arrayOf(
      PropTypes.shape({
        subsectionTitle: PropTypes.string,
        noEditorials: PropTypes.bool,
        links: PropTypes.arrayOf(
          PropTypes.shape({
            publisher: PropTypes.string,
            url: PropTypes.string,
          }).isRequired
        ),
      })
    ).isRequired,
  }).isRequired,
};

export default LinksBlock;

const SubsectionTitle = styled.h4`
  font-family: Inter, InterPre, Helvetica, sans-serif;
  display: block;
  margin-bottom: 10px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.095em;
`;

const LinkWrapper = styled.div`
  display: flex;
`;

const ExternalLink = styled.a`
  font-family: Inter, InterPre, Helvetica, sans-serif;
  margin-top: 4px;
  font-size: 14px;
  line-height: 21px;
  @media screen and (max-width: 768px) {
    margin-top: 8px;
    font-size: 16px;
    line-height: 24px;
  }
  @media not all and (hover: none) {
    &:hover {
      text-decoration: none;
    }
  }
`;

const SectionWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 30px;
`;

const HideOnPrint = styled.div`
  @media print {
    display: none;
  }
`;

const Disclaimer = styled.div`
  font-family: Inter, InterPre, Helvetica, sans-serif;
  font-size: 13px;
  line-height: 17px;
  padding: 10px 20px;
  background-color: #eee;
  border-radius: 2px;
`;

const NoEditorials = styled.div`
  font-size: 13px;

  font-family: Inter, InterPre, Helvetica, sans-serif;
  font-style: italic;
`;
