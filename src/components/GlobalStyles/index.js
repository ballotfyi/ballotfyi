import { createGlobalStyle } from 'styled-components';

const GlobalStyles = () => <Styles />;

export default GlobalStyles;

const Styles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Georgia, serif;
    font-synthesis: weight style;
    font-size: 16px;
    line-height: 26px;
    color: #222;
    @media screen and (max-width: 576px) {
      font-size: 14px;
      line-height: 22px;
    }
  }

  h1 {
    font-family: 'ITC Avant Garde', 'InterPre', sans-serif;
    font-size: 1.8em;
    line-height: 32px;
    letter-spacing: -1px;
    @media screen and (min-width: 576px) {
      font-size: 2.25em;
      line-height: 44px;
    }
    @media screen and (min-width: 768px) {
      font-size: 3.275em;
      line-height: 64px;
    }
    @media screen and (min-width: 992px) {
      font-size: 3.875em;
      line-height: 76px;
    }
  }

  h2 {
    font-family: Inter, 'InterPre', sans-serif;
    margin-top: 1.8em;
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 850;
    font-size: 1.275em;
    line-height: 25px;
    @media screen and (min-width: 576px) {
      font-size: 1.4em;
      line-height: 29px;
    }
    @media screen and (min-width: 768px) {
      font-size: 1.875em;
      line-height: 41px;
    }
    @media screen and (min-width: 992px) {
      font-size: 2.2em;
      line-height: 43px;
    }
  }

  h3 {
    font-family: Inter, 'InterPre', sans-serif;
    margin-top: 1.8em;
    margin-bottom: 0.5em;
    color: #222;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: .035em;
    font-size: 0.85em;
    line-height: 19px;
    @media screen and (min-width: 576px) {
      font-size: 0.87em;
      line-height: 22px;
    }
    @media screen and (min-width: 768px) {
      font-size: .9em;
      line-height: 23px;
    }
    @media screen and (min-width: 992px) {
      font-size: 0.9375em;
      line-height: 24px;
    }
  }


  a {
    font-weight: 420;

    :focus {
      text-decoration: underline;
    }
  }
`;
