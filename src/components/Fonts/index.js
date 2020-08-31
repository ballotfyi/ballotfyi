import Head from 'next/head';
import { useAmp } from 'next/amp';
//-- thank you @zachleat https://github.com/zachleat/web-font-loading-recipes

const AmpFontInter = () => (
  <amp-font
    layout="nodisplay"
    font-family="Inter"
    timeout="2000"
    on-error-remove-class=""
    on-error-add-class=""
    on-load-remove-class="fonts-loading"
    on-load-add-class="fonts-loaded"
  ></amp-font>
);
const AmpFontITC = () => (
  <amp-font
    layout="nodisplay"
    font-family="ITC Avant Garde"
    timeout="2000"
    on-error-remove-class=""
    on-error-add-class=""
    on-load-remove-class="fonts-loading"
    on-load-add-class="fonts-loaded"
  ></amp-font>
);

const fontload = `
  (function(){
    if("fonts" in document){
      if(sessionStorage.fontsLoaded) {
        document.documentElement.className+="fonts-loaded";
        return;
      }
      document.fonts.load("1em InterPre").then(function() {
        document.documentElement.className+=" fonts-loading";
        Promise.all([
          document.fonts.load("700 1em ITC Avant Garde"),
          document.fonts.load("500 1em Inter")
        ]).then(function(){
          document.documentElement.className+=" fonts-loaded";
          sessionStorage.fontsLoaded=true;
        });
      });
    }
  })();
`;
const NonAmpFonts = () => (
  <Head>
    <script type="text/javascript" dangerouslySetInnerHTML={{ __html: fontload }}></script>
  </Head>
);

const Fonts = () => {
  return useAmp() ? (
    <>
      <AmpFontITC />
      <AmpFontInter />
    </>
  ) : (
    <NonAmpFonts />
  );
};

export default Fonts;
