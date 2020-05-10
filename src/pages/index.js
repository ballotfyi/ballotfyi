import styled from 'styled-components'
import Header from 'layout/header.js'
import {useAmp} from 'next/amp'

import ScrollToTop from 'components/ScrollToTop/ScrollToTopButton'

const TallPage = styled.div`
  position: relative;
  height: 2500px;
  background: linear-gradient(#e66465, #9198e5);
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
          <div id="scrollToTopElem">amp</div>
        </>
        :
        <div>
          not amp
          <br/> Homepage
        </div>
      }

      <ScrollToTop />
    </TallPage>
    {/* bottomEl is used for ScrollToTop AMP component */}
    <div style={{backgroundColor: 'white', height:100}} id="bottomEl"/>
      
    </>
  )
}

export default IndexPage;
export const config = { 
  amp: 'hybrid' 
}