import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col, Space } from 'components/util';
// import AnnotationsList from 'components/interactive/annotation/AnnotationsList';
import Image from 'components/Image';

/*
creates a centered image of an even number of columns

{

	component: ImgBlock,
	data: {
		src: {
			_1x: partnerlogos,
			_1x_webp: partnerlogos_w,
		},
		alt: "Image of partner logos",
		nColWidth: 8,
	}
},

*/

const Img = styled(Image)`
  width: 100%;
  object-fit: contain;
  box-sizing: border-box;
  border-radius: 6px;
  @media not all and (hover: none) {
    &:hover {
      cursor: ${(props) => (props.isLink ? 'pointer' : 'auto')};
    }
  }
`;

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

const ImgBlock = (props) => {
  const { src, caption, link, alt } = props.data;

  return (
    <StyledRow>
      <Col>
        <Space h={20} />
        {link ? (
          <a target="_blank" rel="noopener noreferrer" href={link}>
            <Img isLink imageHandles={src} alt={alt || caption || ''} />
          </a>
        ) : (
          <Img imageHandles={src} alt={alt || ''} />
        )}
        {caption && <Caption>{caption}</Caption>}
        <Space h={30} />
      </Col>
    </StyledRow>
  );
};

ImgBlock.propTypes = {
  data: PropTypes.shape({
    src: PropTypes.shape({
      _1x: PropTypes.string.isRequired,
      _2x: PropTypes.string,
      _1x_webp: PropTypes.string,
      _2x_webp: PropTypes.string,
    }),
    alt: PropTypes.string.isRequired,
    caption: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    link: PropTypes.string,
  }),
};

export default ImgBlock;
