import Acronym from 'components/Acronym';
import Citation from 'components/Citation';
import JsxParser from 'react-jsx-parser';

const Parser = (props) => (
  <JsxParser components={{ Acronym, Citation }} jsx={`${props.jsx}`} showWarnings={true} />
);

export default Parser;
