// import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Space } from 'components/util';
import { NavArrow } from 'components/icons';

/*
usage:
{

	component: VideoCarouselBlock,
	data: {
		videos: [
			{
				caption: "CalMatters interview (May 2018)",
				url:"https://www.youtube-nocookie.com/embed/dbf5zOEvvUo",
			},
			{
				caption: "SF Chronicle interview (May 2018)",
				url:"https://www.youtube-nocookie.com/embed/GvQkvaokJcA?start=90",
			},
			{
				caption: "Allen v Cox on who's conservative (April 2018)",
				url:"https://www.youtube-nocookie.com/embed/8OT0w3pE0vc",
			},
		],
	},
},
*/

const VideoCarouselBlock = (props) => {
  const [windowWidth, setWindowWidth] = useState(1000);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth || document.documentElement.clientWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const navVideos = (delta = 1) => {
    const totalVids = props.data.videos.length;
    const newIndex = (((carouselIndex + delta) % totalVids) + totalVids) % totalVids; // nthCard+delta % total
    setCarouselIndex(newIndex);
  };

  const isXsScreen = windowWidth < 767;
  const iFrameWidth = isXsScreen ? '330' : '560';
  const iFrameHeight = isXsScreen ? '185' : '315';
  const { videos } = props.data;
  const showNav = videos.length > 1;
  const videoBlocks = videos.map((video, i) => (
    <VideoBlock key={i}>
      <iframe
        title={`carousel-vid-${i}`}
        width={iFrameWidth}
        height={iFrameHeight}
        src={video.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <Caption>{video.caption}</Caption>
    </VideoBlock>
  ));

  return (
    <div id={props.id}>
      <Space h={30} />
      <CarouselContainer>
        <OuterWindow>
          {showNav && (
            <NavButton onClick={() => navVideos(-1)} style={{ transform: 'rotate(180deg)' }}>
              <NavArrow color="#fff" />
            </NavButton>
          )}
          <Window>
            <InnerReel isXs={isXsScreen} carouselIndex={carouselIndex}>
              {videoBlocks}
            </InnerReel>
          </Window>
          {showNav && (
            <NavButton onClick={() => navVideos(1)}>
              <NavArrow color="#fff" />
            </NavButton>
          )}
        </OuterWindow>
      </CarouselContainer>
      {isXsScreen && showNav && (
        <NavBar>
          <MobileNavButton onClick={() => navVideos(-1)}>Prev</MobileNavButton>
          <MobileNavButton onClick={() => navVideos(1)}>Next</MobileNavButton>
        </NavBar>
      )}
    </div>
  );
};

VideoCarouselBlock.propTypes = {
  data: PropTypes.shape({
    videos: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        caption: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      })
    ).isRequired,
  }).isRequired,
};

export default VideoCarouselBlock;

const VideoBlock = styled.div`
  display: inline-block;
  position: relative;
`;

const Caption = styled.h4`
  margin-top: 5px;
  text-align: center;
  color: white;
`;

const CarouselContainer = styled.div`
  background-color: #222;
  padding: 30px 0 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const Window = styled.div`
  width: 560px;
  @media screen and (max-width: 767px) {
    width: 330px;
    overflow: hidden;
  }
`;

const NavButton = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  height: 315px;
  width: 70px;
  align-items: center;
  z-index: 1;
  @media not all and (hover: none) {
    &:hover {
      cursor: pointer;
      background-color: rgba(145, 97, 255, 0.6);
    }
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const OuterWindow = styled.div`
  width: 700px;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const InnerReel = styled.div`
  display: flex;
  flex-direction: row;
  transform: translateX(-${(props) => props.carouselIndex * (props.isXs ? 330 : 560)}px);
  transition: transform 200ms cubic-bezier(0.165, 0.84, 0.44, 1);
`;

const NavBar = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const MobileNavButton = styled.div`
  font-family: Inter, InterPre, Helvetica, sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  width: 100%;
  border: 3px solid black;
  box-sizing: border-box;
  margin: 0 10px;
  border-radius: 4px;
  text-align: center;
  padding: 10px;
`;
