import {AmpAnimation, AmpPositionObserver} from 'components/AmpHelpers/AmpWrappers'
import useScrollToTop from 'components/ScrollToTop/useScrollToTop'
import styled from 'styled-components'
import {useAmp} from 'next/amp'

//-- styles
const Container = styled.div`
  width: 100%;
  display: ${props=>props.isDisplayed ? 'flex' : 'none'};
  justify-content: center;
`;

const Button = styled.div`
  position: fixed;
  cursor: pointer;
  bottom: 20px;
  display: block;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 
    0 3px 6px -4px rgba(0,0,0,0.12), 
    0 6px 16px 0 rgba(0,0,0,0.08), 
    0 9px 28px 8px rgba(0,0,0,0.05);
`;

//-- AMP version
const ScrollToTopButtonAmp = () => {

  //-- to keep the animations paired with the button
  const buttonId = "scrollToTopBtn"
  const showAnim = 
    {
      duration: "200ms",
      fill: "both",
      iterations: "1",
      direction: "alternate",
      animations: [{
        selector: `#${buttonId}`,
        keyframes: [{
          opacity: "1",
          visibility: "visible"
        }]
      }]
    }
  
  const hideAnim = 
    {
      duration: "200ms",
      fill: "both",
      iterations: "1",
      direction: "alternate",
      animations: [{
        selector: `#${buttonId}`,
        keyframes: [{
          opacity: "0",
          visibility: "hidden"
        }]
      }]
    }
  
  return(
    <>
      <Container isDisplayed={true}>
        <Button 
          role="button"
          tabIndex="10"
          id={`${buttonId}`}
          on="tap:scrollToTopElem.scrollTo(duration=200)">
          back to top
        </Button>
      </Container>

      <AmpAnimation id="hideAnim">
        {hideAnim}
      </AmpAnimation>
      <AmpAnimation id="showAnim">
        {showAnim}
      </AmpAnimation>
      {/* waits until target element comes into viewport */}
      <AmpPositionObserver
        target="bottomEl"
        on="enter:hideAnim.start; exit:showAnim.start" 
      />
    </>
  );
}
//-- non-AMP version
const ScrollToTopButton = () => {
  const [ref, onClickHandler, isDisplayed] = useScrollToTop(0.2);
  return(
    <Container
      ref={ref}
      isDisplayed={isDisplayed}
      >
      <Button onClick={onClickHandler}>
        back to top
      </Button>
    </Container>
  )
}

const ScrollToTopBtn = () => {
  return (useAmp() ? <ScrollToTopButtonAmp/> : <ScrollToTopButton/>)
}
export default ScrollToTopBtn;
