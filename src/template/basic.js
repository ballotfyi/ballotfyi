import React from "react";
import Analytics from "components/Analytics/Analytics";
import StructuredData from "components/StructuredData/StructuredData";
import Fonts from "components/Fonts/Fonts";

/**
 *  HOC to include Analytics and other page-level things (AMP-specific reasons I couldn't do this in _document.js)
 */

const withBasicTemplate = (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Fonts/>
        <Analytics />
        <WrappedComponent {...props} />
      </>
    );
  };
};
export default withBasicTemplate;
