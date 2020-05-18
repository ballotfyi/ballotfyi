import styled from 'styled-components'
import Header from 'components/layout/header.js'
import Image from 'components/Image/Image'
import {useAmp} from 'next/amp'
import withBasicTemplate from 'template/basic'

import ScrollToTop from 'components/ScrollToTop/ScrollToTopButton'

const TallPage = styled.div`
  position: relative;
  height: 2500px;
  background: linear-gradient(#e66465, #9198e5);
`
const ImageContainer = styled.div`
  width: 50%;
`

const IndexPage = () => {
  const isAmp = useAmp();

  return (
    <>
    <TallPage>
      <Header/>
      {isAmp ? 
        <>
          {/* scrollToTopElem is used for ScrollToTop AMP component, needs a target to move to*/}
          <h1><div id="scrollToTopElem">amptastic</div></h1>
          <ImageContainer>
            <Image
              alt="alt text example"
              srcset={[
                {url: './static/lostcoast-sm.jpg', width: 800},
                {url: './static/lostcoast-sm.webp', width: 800},
                {url: './static/lostcoast-md.jpg', width: 1200},
                {url: './static/lostcoast-md.webp', width: 1200},
                {url: './static/lostcoast-lg.jpg', width: 1400},
                {url: './static/lostcoast-lg.webp', width: 1400},
              ]}
              width={2000}
              height={1333}
            />
          </ImageContainer>
          <div style={{height:800}}/>
          <ImageContainer>
            <Image
              alt="alt text example"
              srcset={[
                {url: './static/lostcoast-sm.jpg', width: 800},
                {url: './static/lostcoast-sm.webp', width: 800},
                {url: './static/lostcoast-md.jpg', width: 1200},
                {url: './static/lostcoast-md.webp', width: 1200},
                {url: './static/lostcoast-lg.jpg', width: 1400},
                {url: './static/lostcoast-lg.webp', width: 1400},
              ]}
              width={3}
              height={2}
            />
          </ImageContainer>
          <div style={{height:800}}/>
          <ImageContainer>
            <Image
              alt="alt text example"
              srcset={[
                {url: './static/lostcoast-sm.jpg', width: 800},
                {url: './static/lostcoast-sm.webp', width: 800},
                {url: './static/lostcoast-md.jpg', width: 1200},
                {url: './static/lostcoast-md.webp', width: 1200},
                {url: './static/lostcoast-lg.jpg', width: 1400},
                {url: './static/lostcoast-lg.webp', width: 1400},
              ]}
              width={3}
              height={2}
            />
          </ImageContainer>
        </>
        :
        <div>
          not amp
          <ImageContainer>
            <Image
              alt="alt text example"
              srcset={[
                {url: './static/lostcoast-sm.jpg', width: 800},
                {url: './static/lostcoast-sm.webp', width: 800},
                {url: './static/lostcoast-md.jpg', width: 1200},
                {url: './static/lostcoast-md.webp', width: 1200},
                {url: './static/lostcoast-lg.jpg', width: 1400},
                {url: './static/lostcoast-lg.webp', width: 1400},
              ]}
              width={3}
              height={2}
            />
          </ImageContainer>
        </div>
      }

      <ScrollToTop />
    </TallPage>
    {/* bottomEl is used for ScrollToTop AMP component */}
    <div style={{backgroundColor: 'white', height:100}} id="bottomEl"/>
      
    </>
  )
}

export default withBasicTemplate(IndexPage);

export const config = { 
  amp: 'hybrid' 
}