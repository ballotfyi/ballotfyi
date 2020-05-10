import PropTypes from 'prop-types'

/* Next.js automatically pulls the correct AMP resource */

// https://amp.dev/documentation/components/amp-animation/
export const AmpAnimation = (props) => {
  return(
    <amp-animation id={props.id} layout="nodisplay">
      <script type="application/json" dangerouslySetInnerHTML={{__html: JSON.stringify(props.children)}}>
      </script>
    </amp-animation>
  )
}
AmpAnimation.propTypes = {
  id: PropTypes.string,
  children: PropTypes.object.isRequired
}


//-------------------------------------
// https://amp.dev/documentation/components/amp-position-observer/
export const AmpPositionObserver = (props) => {
  return(
    <amp-position-observer 
      target={props.target}
      on={props.on}
      intersection-ratios={props.intersectionRatios}
      viewport-margins={props.viewportMargins}
      once={props.once}
      layout="nodisplay">
    </amp-position-observer>
  )
}
AmpPositionObserver.propTypes = {
  target: PropTypes.string,
  on: PropTypes.string.isRequired,
  intersectionRatios: PropTypes.string,
  viewportMargins: PropTypes.string, 
  once: PropTypes.string
}
AmpPositionObserver.defaultProps = {
  target: undefined,
  on: undefined,
  intersectionRatios: "0",
  viewportMargins: "0", 
  once: undefined
}
