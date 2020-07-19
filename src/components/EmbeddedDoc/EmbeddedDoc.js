import {useAmp} from 'next/amp'
import PropTypes from 'prop-types';

const EmbeddedDocument = (props) => {
  const { isAmp } = useAmp();
  if (!props.src) return null;
  if( isAmp ) {
    return ( 
      <amp-google-document-embed 
        src={props.src}
        width={`${props.width}`}
        height={`${props.height}`}
        layout="responsive">
      </amp-google-document-embed>
    )
  } else {
    return null
  }
}

export default EmbeddedDocument

EmbeddedDocument.propTypes = {
	src: PropTypes.string.isRequired,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

EmbeddedDocument.defaultProps = {
  src: null,
  width: '8.5',
	height: '11'
}