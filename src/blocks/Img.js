import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, ArticleCol, Space } from 'components/util';
import Image from 'components/Image';

/*
creates a centered image of an even number of columns
{

	component: ImgBlock,
	data: {
		srcset: [
      {url: './static/lostcoast-sm.jpg', width: 800},
      {url: './static/lostcoast-sm.webp', width: 800},
      {url: './static/lostcoast-md.jpg', width: 1200},
      {url: './static/lostcoast-md.webp', width: 1200},
      {url: './static/lostcoast-lg.jpg', width: 1400},
      {url: './static/lostcoast-lg.webp', width: 1400},
    ],
    alt: "Image of partner logos",
    caption: "Caption for image, different from alt",
    link: "https://www.nytimes.com"
		width: 3,
		height: 2,
	}
},

*/

const ImgBlock = (props) => {
  const { caption, link } = props.data;

  return (
    <StyledRow>
      <ArticleCol>
        <Space h={20} />
        {link ? (
          <a target="_blank" rel="noopener noreferrer" href={link}>
            <Image {...props.data} />
          </a>
        ) : (
          <Image {...props.data} />
        )}
        {caption && <Caption>{caption}</Caption>}
        <Space h={30} />
      </ArticleCol>
    </StyledRow>
  );
};

ImgBlock.propTypes = {
  data: PropTypes.shape({
    srcset: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        width: PropTypes.number.number,
      })
    ).isRequired,
    alt: PropTypes.string.isRequired,
    caption: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    link: PropTypes.string,
  }),
};

export default ImgBlock;

const Caption = styled.div`
  font-size: 14px;
  line-height: 18px;
  font-style: italic;
  margin-top: 5px;
  color: #666;
  padding-left: 5px;
`;

const StyledRow = styled(Row)`
  @media print {
    display: none;
  }
`;
