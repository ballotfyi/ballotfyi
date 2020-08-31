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
  }

  h1 {
    font-family: 'ITC Avant Garde', 'InterPre', sans-serif;
    font-size: 3.875em;
    line-height: 76px;
    letter-spacing: -1px;
  }

  h2 {
    font-family: Inter, 'InterPre', sans-serif;
    margin-top: 1.8em;
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 850;
    font-size: 2.2em;
    line-height: 43px;
  }

  h3 {
    font-family: Inter, 'InterPre', sans-serif;
    margin-top: 1.8em;
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 850;
    font-size: 1.1em;
    line-height: 30px;
  }

  a {
    font-weight: 420;

    :focus {
      text-decoration: underline;
    }
  }
`;
