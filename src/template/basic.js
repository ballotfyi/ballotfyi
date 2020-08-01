import React, { useEffect, useState } from 'react';
import Analytics from 'components/Analytics';
import Fonts from 'components/Fonts';

/**
 *  HOC to include Analytics and other page-level things (AMP-specific reasons I couldn't do this in _document.js)
 */

const withBasicTemplate = (WrappedComponent) => {
  return (props) => {
    const [enableGA, setEnableGA] = useState(false);
    useEffect(() => {
      function isDoNotTrackEnabled() {
        const doNotTrackOption =
          window.doNotTrack || window.navigator.doNotTrack || window.navigator.msDoNotTrack;
        if (!doNotTrackOption) return false;
        return doNotTrackOption.charAt(0) === '1' || doNotTrackOption === 'yes';
      }

      setEnableGA(!isDoNotTrackEnabled());
    }, []);
    return (
      <>
        {enableGA && <Analytics />}
        <Fonts />
        <WrappedComponent {...props} />
      </>
    );
  };
};
export default withBasicTemplate;
